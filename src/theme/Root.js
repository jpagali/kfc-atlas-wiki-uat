import React, {lazy, Suspense, useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

const AtlasChat = lazy(() => import('@site/src/components/AtlasChat'));
const LOCALIZED_ROOT_LOCALES = new Set(['fr-FR', 'es-ES', 'de-DE']);

function removeLocaleSegment(pathname, locale) {
  if (!LOCALIZED_ROOT_LOCALES.has(locale)) return pathname;

  return pathname.replace(`/${locale}/`, '/');
}

function MediaServiceWorker() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const workerUrl = useBaseUrl('/atlas-wiki-sw.js', {forcePrependBaseUrl: true});
  const scope = useBaseUrl('/', {forcePrependBaseUrl: true});
  const rootWorkerUrl = removeLocaleSegment(workerUrl, currentLocale);
  const rootScope = removeLocaleSegment(scope, currentLocale);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    if (window.location.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(window.location.hostname)) return;

    navigator.serviceWorker.register(rootWorkerUrl, {scope: rootScope}).catch(() => {});
  }, [rootScope, rootWorkerUrl]);

  return null;
}

function ImageZoom() {
  useEffect(() => {
    // Create overlay once
    let overlay = document.getElementById('img-zoom-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'img-zoom-overlay';
      const img = document.createElement('img');
      overlay.appendChild(img);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => overlay.classList.remove('active'));
    }

    // Use event delegation — one listener on document handles all pages/navigations
    const handler = (e) => {
      const img = e.target.closest('.markdown img');
      if (!img) return;
      const overlayEl = document.getElementById('img-zoom-overlay');
      overlayEl.querySelector('img').src = img.src;
      overlayEl.classList.add('active');
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return null;
}

// Root wraps the entire app — AtlasChat appears on every page
export default function Root({children}) {
  return (
    <>
      {children}
      <MediaServiceWorker />
      <ImageZoom />
      <Suspense fallback={null}>
        <AtlasChat />
      </Suspense>
    </>
  );
}
