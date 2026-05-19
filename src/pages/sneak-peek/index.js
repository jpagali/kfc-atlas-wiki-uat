import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const PROTOTYPE_URL = 'https://jpagali.github.io/kfc-ui-sandbox/rna-sneak-peek-prototype.html';
const PROTOTYPE_BASE = 'https://jpagali.github.io/kfc-ui-sandbox/';
const PROTOTYPE_VERSION = 'iphone-17-pro-max-v3';
const CONTACT_MESSAGE = 'Please reach out to jyp4013@yum.com';
const DB_NAME = 'rna-sneak-peek-session-package';
const DB_STORE = 'packages';
const PACKAGE_ID = 'latest';
const SESSION_ID_KEY = 'rna-sneak-peek-session-id';
const SESSION_KEY_KEY = 'rna-sneak-peek-session-key';
const MOBILE_HINT_KEY = 'rna-sneak-peek-mobile-hint-seen';
const PROTOTYPE_STATE_KEYS = [
  'rna-sneak-peek-shell-mode-v1',
  'rna-sneak-peek-shell-mode-v2',
  'rna-sneak-peek-shell-mode-v3',
  'rna-sneak-peek-prototype-state-v2',
];
const PROTOTYPE_COOKIE_KEYS = ['rna_sneak_peek_state_v2'];
const SCRIPT_ASSETS = [
  'i18n/market-flags.js?v=15',
  'i18n/translations.js?v=14',
  'kfc-au-menu-data.js?v=12',
];

const BLOCKED_KEYS = new Set(['c', 'p', 's', 'u']);

export default function SneakPeekPage() {
  return (
    <Layout
      title="RNA Sneak Peek"
      description="Latest RNA prototype preview for Atlas Wiki stakeholders."
    >
      <SneakPeekViewer />
    </Layout>
  );
}

function SneakPeekViewer() {
  const homeHref = useBaseUrl('/');
  const iframeRef = React.useRef(null);
  const objectUrlsRef = React.useRef([]);
  const [loadState, setLoadState] = React.useState({
    status: 'loading',
    message: 'Loading latest RNA prototype...',
    source: 'session',
    loadedAt: null,
  });
  const [frameDoc, setFrameDoc] = React.useState('');
  const [renderKey, setRenderKey] = React.useState(0);
  const [toast, setToast] = React.useState('');
  const [isMobileAppView, setIsMobileAppView] = React.useState(false);
  const [showMobileHint, setShowMobileHint] = React.useState(false);

  const showProtectionMessage = React.useCallback(() => {
    setToast(CONTACT_MESSAGE);
    window.clearTimeout(window.__rnaSneakPeekToastTimer);
    window.__rnaSneakPeekToastTimer = window.setTimeout(() => setToast(''), 3200);
  }, []);

  const loadPrototype = React.useCallback(async ({forceRefresh = false} = {}) => {
    setLoadState((current) => ({
      ...current,
      status: 'loading',
      message: forceRefresh ? 'Refreshing latest RNA prototype...' : 'Loading latest RNA prototype...',
    }));

    try {
      if (forceRefresh) {
        clearPrototypeState();
        await deleteStoredPackage();
      }

      const packageData = await getPrototypePackage({forceRefresh});
      const prepared = preparePrototypeDocument(packageData, objectUrlsRef.current);
      setFrameDoc(prepared.html);
      setRenderKey((value) => value + 1);
      setLoadState({
        status: 'ready',
        message: 'Latest prototype loaded',
        source: packageData.fromCache ? 'Encrypted session copy' : 'Fresh published build',
        loadedAt: packageData.fetchedAt,
      });
    } catch (error) {
      setLoadState({
        status: 'error',
        message: 'The latest RNA prototype could not be loaded.',
        source: error?.message || 'Fetch failed',
        loadedAt: null,
      });
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('sneak-peek-theatre');
    document.documentElement.classList.add('sneak-peek-theatre');
    return () => {
      document.body.classList.remove('sneak-peek-theatre');
      document.documentElement.classList.remove('sneak-peek-theatre');
      objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
      objectUrlsRef.current = [];
      window.clearTimeout(window.__rnaSneakPeekToastTimer);
    };
  }, []);

  React.useEffect(() => {
    const controller = new AbortController();
    loadPrototype({signal: controller.signal});
    return () => controller.abort();
  }, [loadPrototype]);

  React.useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'rna-protection-message') {
        showProtectionMessage();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [showProtectionMessage]);

  React.useEffect(() => {
    const updateMode = () => {
      const narrowViewport = window.matchMedia('(max-width: 760px)').matches;
      setIsMobileAppView(narrowViewport);
    };

    updateMode();
    window.addEventListener('resize', updateMode);
    window.addEventListener('orientationchange', updateMode);
    return () => {
      window.removeEventListener('resize', updateMode);
      window.removeEventListener('orientationchange', updateMode);
    };
  }, []);

  React.useEffect(() => {
    let hintSeen = false;
    try {
      hintSeen = window.sessionStorage.getItem(MOBILE_HINT_KEY) === 'true';
    } catch {
      hintSeen = false;
    }

    if (!isMobileAppView || hintSeen) return;
    setShowMobileHint(true);
    try {
      window.sessionStorage.setItem(MOBILE_HINT_KEY, 'true');
    } catch {
      // If session storage is blocked, still show the guidance for this view.
    }
  }, [isMobileAppView]);

  React.useEffect(() => {
    const blockEvent = (event) => {
      event.preventDefault();
      showProtectionMessage();
    };

    const blockShortcut = (event) => {
      const key = event.key?.toLowerCase();
      if ((event.metaKey || event.ctrlKey) && BLOCKED_KEYS.has(key)) {
        event.preventDefault();
        showProtectionMessage();
      }
    };

    document.addEventListener('contextmenu', blockEvent);
    document.addEventListener('copy', blockEvent);
    document.addEventListener('cut', blockEvent);
    document.addEventListener('keydown', blockShortcut);
    return () => {
      document.removeEventListener('contextmenu', blockEvent);
      document.removeEventListener('copy', blockEvent);
      document.removeEventListener('cut', blockEvent);
      document.removeEventListener('keydown', blockShortcut);
    };
  }, [showProtectionMessage]);

  const handleRestart = React.useCallback(() => {
    clearPrototypeState();
    iframeRef.current?.contentWindow?.postMessage({type: 'prototype-restart'}, '*');
    setRenderKey((value) => value + 1);
  }, []);

  const handleRefresh = React.useCallback(() => {
    loadPrototype({forceRefresh: true});
  }, [loadPrototype]);

  const formattedTime = React.useMemo(() => {
    if (!loadState.loadedAt) return 'Not loaded yet';
    return new Intl.DateTimeFormat('en', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(loadState.loadedAt));
  }, [loadState.loadedAt]);

  return (
    <main
      className={`${styles.page} ${isMobileAppView ? styles.mobileAppPage : ''}`}
      onContextMenu={(event) => {
        event.preventDefault();
        showProtectionMessage();
      }}
    >
      <style>{`
        .theme-announcement-bar,
        .announcementBarPlaceholder_vyr4,
        .theme-layout-navbar,
        .navbar,
        footer,
        .locale-disclaimer {
          display: none !important;
        }
        body {
          padding-top: 0 !important;
        }
        .main-wrapper {
          min-height: 100vh;
          min-height: 100dvh;
        }
      `}</style>
      <div className={styles.printBlock}>{CONTACT_MESSAGE}</div>

      {!isMobileAppView ? (
        <header className={styles.commandBar}>
          <div className={styles.identity}>
            <div className={styles.kfcMark}>KFC</div>
            <div>
              <div className={styles.eyebrow}>Atlas Prototype Theatre</div>
              <h1>RNA Sneak Peek</h1>
            </div>
          </div>
          <div className={styles.sessionStatus} aria-live="polite">
            <span className={`${styles.statusDot} ${loadState.status === 'ready' ? styles.statusDotReady : ''}`} />
            <span>{loadState.message}</span>
            <small>{loadState.source} - {formattedTime}</small>
          </div>
          <nav className={styles.actions} aria-label="Prototype actions">
            <button type="button" onClick={handleRestart} disabled={loadState.status !== 'ready'}>
              Restart
            </button>
            <button type="button" onClick={handleRefresh}>
              Refresh Session
            </button>
            <Link to={homeHref}>Back to Wiki</Link>
          </nav>
        </header>
      ) : null}

      {isMobileAppView ? (
        <nav className={styles.mobileReturnBar} aria-label="Prototype navigation">
          <Link to={homeHref} className={styles.mobileReturnButton}>
            Back to Wiki
          </Link>
          <span>Use your browser Back button to return to the previous wiki page.</span>
        </nav>
      ) : null}

      <section className={styles.stage} aria-label="RNA prototype preview">
        <div className={isMobileAppView ? styles.mobileViewport : styles.phoneShell}>
          {!isMobileAppView ? (
            <>
              <div className={styles.sideButtonLeft} />
              <div className={styles.sideButtonRight} />
              <div className={styles.dynamicIsland} />
            </>
          ) : null}

          <div className={styles.screen}>
            {loadState.status === 'error' ? (
              <div className={styles.errorState}>
                <span>Prototype unavailable</span>
                <p>{loadState.message}</p>
                <small>{CONTACT_MESSAGE}</small>
                <button type="button" onClick={handleRefresh}>Try Again</button>
              </div>
            ) : null}

            {loadState.status === 'loading' ? (
              <div className={styles.loadingState}>
                <div className={styles.loadingPulse} />
                <span>{loadState.message}</span>
              </div>
            ) : null}

            {frameDoc ? (
              <iframe
                key={renderKey}
                ref={iframeRef}
                className={styles.prototypeFrame}
                srcDoc={frameDoc}
                title="RNA Sneak Peek Prototype"
                allow="fullscreen"
                allowFullScreen
              />
            ) : null}
          </div>
        </div>
      </section>

      {showMobileHint ? (
        <div className={styles.mobileHint} role="dialog" aria-live="polite">
          <p>You are viewing the prototype. Use your browser Back button to return to the previous wiki page, or tap Back to Wiki.</p>
          <button type="button" onClick={() => setShowMobileHint(false)}>Got it</button>
        </div>
      ) : null}

      {toast ? <div className={styles.protectionToast} role="status">{toast}</div> : null}
    </main>
  );
}

async function getPrototypePackage({forceRefresh = false} = {}) {
  const sessionId = getSessionId();
  const key = await getSessionCryptoKey();

  if (!forceRefresh) {
    const stored = await readStoredPackage();
    if (stored?.sessionId === sessionId && stored?.prototypeVersion === PROTOTYPE_VERSION) {
      try {
        const decrypted = await decryptPackage(stored, key);
        return {...decrypted, fromCache: true};
      } catch {
        await deleteStoredPackage();
      }
    }
  }

  clearPrototypeState();
  const fetchedPackage = await fetchPublishedPackage();
  const packageData = {
    ...fetchedPackage,
    sessionId,
    prototypeVersion: PROTOTYPE_VERSION,
    fetchedAt: new Date().toISOString(),
  };
  const encrypted = await encryptPackage(packageData, key);
  await writeStoredPackage({...encrypted, sessionId, prototypeVersion: PROTOTYPE_VERSION});
  return {...packageData, fromCache: false};
}

async function fetchPublishedPackage() {
  const htmlResponse = await fetch(`${PROTOTYPE_URL}?session=${Date.now()}`, {
    cache: 'no-store',
    mode: 'cors',
  });

  if (!htmlResponse.ok) {
    throw new Error(`Published prototype returned ${htmlResponse.status}`);
  }

  const html = await htmlResponse.text();
  const scripts = {};

  await Promise.all(SCRIPT_ASSETS.map(async (assetPath) => {
    const assetUrl = new URL(assetPath, PROTOTYPE_BASE).toString();
    try {
      const response = await fetch(assetUrl, {cache: 'no-store', mode: 'cors'});
      if (response.ok) {
        scripts[assetPath] = await response.text();
      }
    } catch {
      scripts[assetPath] = null;
    }
  }));

  return {html, scripts};
}

function preparePrototypeDocument(packageData, objectUrls) {
  objectUrls.forEach((url) => URL.revokeObjectURL(url));
  objectUrls.length = 0;

  const scriptUrls = Object.entries(packageData.scripts || {}).reduce((result, [assetPath, source]) => {
    if (!source) return result;
    const blobUrl = URL.createObjectURL(new Blob([source], {type: 'text/javascript'}));
    objectUrls.push(blobUrl);
    result[assetPath] = blobUrl;
    return result;
  }, {});

  let html = packageData.html;
  html = html.replace(/<head([^>]*)>/i, `<head$1><base href="${PROTOTYPE_BASE}">`);
  html = html.replace(
    /<script src="i18n\/market-flags\.js\?v=15"><\/script>/,
    `<script src="${scriptUrls['i18n/market-flags.js?v=15'] || `${PROTOTYPE_BASE}i18n/market-flags.js?v=15`}"></script>`
  );
  html = html.replace(
    /<script src="i18n\/translations\.js\?v=14"><\/script>/,
    `<script src="${scriptUrls['i18n/translations.js?v=14'] || `${PROTOTYPE_BASE}i18n/translations.js?v=14`}"></script>`
  );
  html = html.replaceAll(
    '"kfc-au-menu-data.js?v=12"',
    `"${scriptUrls['kfc-au-menu-data.js?v=12'] || `${PROTOTYPE_BASE}kfc-au-menu-data.js?v=12`}"`
  );
  html = html.replace('</head>', `${getEmbeddedProtection()} </head>`);

  return {html};
}

function getEmbeddedProtection() {
  return `
    <style>
      @media print {
        body > * { display: none !important; }
        body::before {
          content: "${CONTACT_MESSAGE}";
          display: grid;
          min-height: 100vh;
          place-items: center;
          color: #231815;
          font: 700 22px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
      }
      .app-shell-toggle {
        display: none !important;
      }
    </style>
    <script>
      (() => {
        const message = ${JSON.stringify(CONTACT_MESSAGE)};
        const blockedKeys = new Set(["c", "p", "s", "u"]);
        const notify = () => {
          try { window.parent.postMessage({ type: "rna-protection-message", message }, "*"); } catch (error) {}
          const existing = document.getElementById("rna-protection-toast");
          if (existing) existing.remove();
          const toast = document.createElement("div");
          toast.id = "rna-protection-toast";
          toast.textContent = message;
          toast.style.cssText = "position:fixed;left:50%;bottom:18px;z-index:999999;transform:translateX(-50%);max-width:calc(100% - 32px);padding:12px 14px;border-radius:999px;background:#231815;color:#fff7f1;font:700 13px system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;box-shadow:0 18px 48px rgba(0,0,0,.28);";
          document.body.appendChild(toast);
          window.setTimeout(() => toast.remove(), 3000);
        };
        const block = (event) => { event.preventDefault(); notify(); };
        document.addEventListener("contextmenu", block);
        document.addEventListener("copy", block);
        document.addEventListener("cut", block);
        document.addEventListener("keydown", (event) => {
          const key = String(event.key || "").toLowerCase();
          if ((event.metaKey || event.ctrlKey) && blockedKeys.has(key)) block(event);
        });
      })();
    </script>
  `;
}

function getSessionId() {
  let sessionId = window.sessionStorage.getItem(SESSION_ID_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    window.sessionStorage.setItem(SESSION_ID_KEY, sessionId);
    clearPrototypeState();
  }
  return sessionId;
}

async function getSessionCryptoKey() {
  let rawKey = window.sessionStorage.getItem(SESSION_KEY_KEY);
  if (!rawKey) {
    const bytes = crypto.getRandomValues(new Uint8Array(32));
    rawKey = bytesToBase64(bytes);
    window.sessionStorage.setItem(SESSION_KEY_KEY, rawKey);
  }

  return crypto.subtle.importKey(
    'raw',
    base64ToBytes(rawKey),
    {name: 'AES-GCM'},
    false,
    ['encrypt', 'decrypt']
  );
}

async function encryptPackage(packageData, key) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoded = new TextEncoder().encode(JSON.stringify(packageData));
  const encrypted = await crypto.subtle.encrypt({name: 'AES-GCM', iv}, key, encoded);
  return {
    iv: bytesToBase64(iv),
    payload: bytesToBase64(new Uint8Array(encrypted)),
    updatedAt: new Date().toISOString(),
  };
}

async function decryptPackage(storedPackage, key) {
  const decrypted = await crypto.subtle.decrypt(
    {name: 'AES-GCM', iv: base64ToBytes(storedPackage.iv)},
    key,
    base64ToBytes(storedPackage.payload)
  );
  return JSON.parse(new TextDecoder().decode(decrypted));
}

function openPackageDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(DB_STORE);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function readStoredPackage() {
  const db = await openPackageDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(DB_STORE, 'readonly');
    const request = transaction.objectStore(DB_STORE).get(PACKAGE_ID);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => db.close();
  });
}

async function writeStoredPackage(value) {
  const db = await openPackageDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(DB_STORE, 'readwrite');
    transaction.objectStore(DB_STORE).put(value, PACKAGE_ID);
    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
  });
}

async function deleteStoredPackage() {
  const db = await openPackageDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(DB_STORE, 'readwrite');
    transaction.objectStore(DB_STORE).delete(PACKAGE_ID);
    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
  });
}

function clearPrototypeState() {
  try {
    PROTOTYPE_STATE_KEYS.forEach((key) => window.localStorage.removeItem(key));
    Object.keys(window.localStorage)
      .filter((key) => key.startsWith('rna-sneak-peek-'))
      .forEach((key) => window.localStorage.removeItem(key));
  } catch {
    // Prototype cleanup should never block the viewer.
  }

  PROTOTYPE_COOKIE_KEYS.forEach((key) => {
    document.cookie = `${key}=; path=/; max-age=0; SameSite=Lax`;
  });
}

function bytesToBase64(bytes) {
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return window.btoa(binary);
}

function base64ToBytes(value) {
  const binary = window.atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}
