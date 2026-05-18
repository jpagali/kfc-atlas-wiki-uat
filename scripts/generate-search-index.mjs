import fs from 'node:fs';
import path from 'node:path';
import {buildNormalizedSearchFields} from '../src/utils/searchNormalization.mjs';

const rootDir = process.cwd();
const docsDir = path.join(rootDir, 'docs');
const localeConfigs = [
  {
    locale: 'en-US',
    docsDir,
    outputPath: path.join(rootDir, 'static', 'search-index.en-US.json'),
  },
  {
    locale: 'fr-FR',
    docsDir: path.join(rootDir, 'i18n', 'fr-FR', 'docusaurus-plugin-content-docs', 'current'),
    outputPath: path.join(rootDir, 'static', 'search-index.fr-FR.json'),
  },
  {
    locale: 'es-ES',
    docsDir: path.join(rootDir, 'i18n', 'es-ES', 'docusaurus-plugin-content-docs', 'current'),
    outputPath: path.join(rootDir, 'static', 'search-index.es-ES.json'),
  },
  {
    locale: 'de-DE',
    docsDir: path.join(rootDir, 'i18n', 'de-DE', 'docusaurus-plugin-content-docs', 'current'),
    outputPath: path.join(rootDir, 'static', 'search-index.de-DE.json'),
  },
];

function walkMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, {withFileTypes: true});

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkMarkdownFiles(fullPath);
    if (entry.isFile() && (fullPath.endsWith('.md') || fullPath.endsWith('.mdx'))) return [fullPath];
    return [];
  });
}

function parseFrontMatter(source) {
  if (!source.startsWith('---\n')) return {frontMatter: {}, content: source};
  const end = source.indexOf('\n---\n', 4);
  if (end === -1) return {frontMatter: {}, content: source};

  const rawFrontMatter = source.slice(4, end);
  const content = source.slice(end + 5);
  const frontMatter = {};

  rawFrontMatter.split('\n').forEach((line) => {
    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!match) return;
    const [, key, value] = match;
    frontMatter[key] = value.trim();
  });

  return {frontMatter, content};
}

function extractHeadings(source) {
  const headings = [];
  let inCodeFence = false;

  source.split('\n').forEach((line) => {
    if (line.trim().startsWith('```')) {
      inCodeFence = !inCodeFence;
      return;
    }
    if (inCodeFence) return;

    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (!match) return;
    headings.push(stripMarkdown(match[2]));
  });

  return headings;
}

function extractSummary(source, locale) {
  const summaryHeadingPatterns = [
    /^##\s+What this guide covers\s*$/m,
    /^##\s+Ce que couvre ce guide\s*$/m,
    /^##\s+Qué cubre esta guía\s*$/m,
    /^##\s+Was dieser Leitfaden abdeckt\s*$/m,
    /^##\s+Goal\s*$/m,
    /^##\s+Objectif\s*$/m,
    /^##\s+Objetivo\s*$/m,
    /^##\s+Ziel\s*$/m,
  ];

  for (const pattern of summaryHeadingPatterns) {
    const match = source.match(pattern);
    if (!match || match.index == null) continue;

    const afterHeading = source.slice(match.index + match[0].length).trimStart();
    const paragraph = afterHeading.split(/\n\s*\n/)[0];
    const cleanedParagraph = stripMarkdown(paragraph);

    if (cleanedParagraph) return limitSummary(cleanedParagraph);
  }

  const fallbackParagraphs = source
    .split(/\n\s*\n/)
    .map((block) => stripMarkdown(block))
    .filter(Boolean)
    .filter((block) => !block.startsWith('---'))
    .filter((block) => !/^Part of the\b/.test(block))
    .filter((block) => !/^Step\s+\d+/i.test(block))
    .filter((block) => !/^Step\s+\d+/i.test(block));

  return limitSummary(fallbackParagraphs[0] || '');
}

function limitSummary(source) {
  const compact = source.replace(/\s+/g, ' ').trim();
  if (compact.length <= 180) return compact;

  const sentenceMatch = compact.match(/^(.{1,180}?[.!?。])/);
  if (sentenceMatch) return sentenceMatch[1].trim();

  return `${compact.slice(0, 177).trim()}...`;
}

function stripMarkdown(source) {
  return source
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[[^\]]+\]\([^)]+\)/g, ' ')
    .replace(/`{1,3}[^`]+`{1,3}/g, ' ')
    .replace(/[#>*_|-]/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function toDocUrl(locale, docsRoot, filePath) {
  const relativePath = path.relative(docsRoot, filePath).replace(/\\/g, '/');
  const withoutExtension = relativePath.replace(/\.mdx?$/, '');
  const normalizedPath = withoutExtension.replace(/\/index$/, '');
  const prefix = locale === 'en-US' ? '/docs' : `/${locale}/docs`;
  return normalizedPath ? `${prefix}/${normalizedPath}/` : `${prefix}/`;
}

function createRecord(locale, localeDocsDir, filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const {frontMatter, content} = parseFrontMatter(source);
  const headings = extractHeadings(content);
  const title = stripMarkdown(frontMatter.title || headings[0] || path.basename(path.dirname(filePath)));
  const summary = extractSummary(content, locale);

  const relativePath = path.relative(localeDocsDir, filePath).replace(/\\/g, '/');
  const section = relativePath.split('/')[0] || 'docs';

  return {
    locale,
    title,
    headings: headings.slice(1),
    summary,
    section,
    url: toDocUrl(locale, localeDocsDir, filePath),
    ...buildNormalizedSearchFields({
      title,
      headings: headings.slice(1),
      summary,
      section,
    }),
  };
}

localeConfigs.forEach(({locale, docsDir: localeDocsDir, outputPath}) => {
  const records = walkMarkdownFiles(localeDocsDir).map((filePath) => createRecord(locale, localeDocsDir, filePath));
  fs.writeFileSync(outputPath, JSON.stringify(records, null, 2));
  console.log(`Wrote ${records.length} ${locale} search records to ${outputPath}`);
});
