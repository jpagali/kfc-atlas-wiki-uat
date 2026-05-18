import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DocItemLayout from '@theme-original/DocItem/Layout';

const TRANSLATION_NOTICES = {
  'fr-FR':
    'Cette page a été traduite avec l’aide de l’IA et peut nécessiter une revue marché avant toute utilisation opérationnelle.',
  'es-ES':
    'Esta página se tradujo con ayuda de IA y puede requerir revisión del mercado antes de su uso operativo.',
  'de-DE':
    'Diese Seite wurde mithilfe von KI übersetzt und sollte vor der operativen Nutzung gegebenenfalls vom Markt geprüft werden.',
};

const CONFIG_WIP_HEADING_ID = 'wip-what-can-be-configured-on-this-screen';
const CONFIG_WIP_HEADING_TEXT = 'wip: what can be configured on this screen';

function applyConfigWipOverlays() {
  document.querySelectorAll('.theme-doc-markdown h2').forEach((heading) => {
    const headingId = heading.id?.toLowerCase();
    const headingText = heading.textContent?.trim().toLowerCase();
    const isConfigWipHeading =
      headingId === CONFIG_WIP_HEADING_ID || headingText === CONFIG_WIP_HEADING_TEXT;

    if (!isConfigWipHeading) {
      return;
    }

    let current = heading.nextElementSibling;

    while (current && !['H1', 'H2'].includes(current.tagName)) {
      const table = current.matches('table') ? current : current.querySelector('table');

      if (table) {
        if (table.parentElement?.classList.contains('atlas-config-wip-table')) {
          return;
        }

        const wrapper = document.createElement('div');
        wrapper.className = 'atlas-config-wip-table';
        wrapper.setAttribute('aria-label', 'Documentation is coming. Work in progress.');
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
        return;
      }

      current = current.nextElementSibling;
    }
  });
}

export default function DocItemLayoutWrapper(props) {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const notice = TRANSLATION_NOTICES[currentLocale];

  useEffect(() => {
    applyConfigWipOverlays();
  }, [props.children]);

  const children = (
    <>
      {notice ? (
        <div className="atlas-translation-notice" role="note">
          <strong>AI translation notice:</strong> {notice}
        </div>
      ) : null}
      {props.children}
    </>
  );

  return <DocItemLayout {...props}>{children}</DocItemLayout>;
}
