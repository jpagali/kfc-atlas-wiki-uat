# KFC Atlas Wiki UAT

This repository contains the Docusaurus-based KFC Atlas Wiki UAT site.

The current public UAT reference is:

https://jpagali.github.io/kfc-atlas-wiki-uat/

## Source of Truth

GitHub UAT is the source of truth for the current wiki implementation.

| Environment | Purpose | Notes |
|---|---|---|
| GitHub UAT | Primary UAT validation site | Deployed from `origin/main` to GitHub Pages. |
| GitLab | Internal mirror / GitLab Pages path | Should follow GitHub UAT exactly unless a GitLab-specific deployment fix is required. |

GitLab `main` is protected. Sync changes to GitLab through a merge request instead of direct pushes to `main`.

## Local Setup

Install dependencies:

```bash
npm ci
```

Build the full site:

```bash
npm run build
```

The build generates all configured locales:

- `en-US`
- `fr-FR`
- `es-ES`
- `de-DE`

## Local Preview

Serve the built site:

```bash
npm run serve -- --port 3004 --host 127.0.0.1
```

Then open:

```text
http://127.0.0.1:3004/
```

For Docusaurus development mode in English:

```bash
npm run start:dev-en
```

## Atlas Peek Prototype

The Atlas Peek page does **not** use a local static prototype file.

The `/sneak-peek` route loads the current RNA prototype from the sandbox:

```text
https://jpagali.github.io/kfc-ui-sandbox/rna-sneak-peek-prototype.html
```

Do not reintroduce `static/rna-sneak-peek-prototype.html` unless the deployment model intentionally changes back to a repo-hosted prototype bundle.

## Deployment

### GitHub UAT

GitHub Pages deploys from `origin/main` using:

```text
.github/workflows/deploy-gh-pages.yml
```

The workflow runs:

```bash
npm ci
npm run build
```

and publishes the generated `build/` output to GitHub Pages.

### GitLab

GitLab should be aligned to the same file tree as GitHub UAT.

Recommended sync flow:

1. Confirm GitHub UAT is correct.
2. Create a GitLab sync branch from `gitlab/main`.
3. Apply the GitHub UAT tree from `origin/main`.
4. Verify there are no file differences against `origin/main`.
5. Open a GitLab merge request into protected `main`.

Useful verification:

```bash
git diff --name-status gitlab/<sync-branch> origin/main
```

Expected result: no output.

## Verification Checklist

Before promoting a change:

1. Run `npm run build`.
2. Preview locally on a fixed port, such as `3004`.
3. Check the homepage loads.
4. Check `/sneak-peek` loads the sandbox-backed Atlas Peek shell.
5. Confirm locale navigation matches `en-US`, `fr-FR`, `es-ES`, and `de-DE`.
6. Keep unrelated local working-tree changes out of the commit.
