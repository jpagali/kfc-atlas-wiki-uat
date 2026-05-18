const MEDIA_CACHE_NAME = 'atlas-media-v1';
const COLONEL_VIDEO_PATH = '/video/colonel-sanders-cooking-chicken.mp4';

function isColonelVideoRequest(request) {
  if (request.method !== 'GET') return false;

  const url = new URL(request.url);
  return url.pathname.endsWith(COLONEL_VIDEO_PATH);
}

function buildVideoCacheRequest(request) {
  const url = new URL(request.url);
  url.search = '';

  return new Request(url.toString(), {
    method: 'GET',
    credentials: 'same-origin',
    cache: 'reload',
  });
}

async function getOrCacheVideo(request) {
  const cache = await caches.open(MEDIA_CACHE_NAME);
  const cacheRequest = buildVideoCacheRequest(request);
  const cachedResponse = await cache.match(cacheRequest);

  if (cachedResponse) {
    return cachedResponse;
  }

  const networkResponse = await fetch(cacheRequest);
  if (networkResponse.ok) {
    await cache.put(cacheRequest, networkResponse.clone());
  }

  return networkResponse;
}

function parseRangeHeader(rangeHeader, size) {
  const match = rangeHeader.match(/^bytes=(\d*)-(\d*)$/);
  if (!match) return null;

  let start = match[1] ? Number.parseInt(match[1], 10) : 0;
  let end = match[2] ? Number.parseInt(match[2], 10) : size - 1;

  if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= size) {
    return null;
  }

  end = Math.min(end, size - 1);
  return {start, end};
}

async function buildRangeResponse(response, rangeHeader) {
  const buffer = await response.arrayBuffer();
  const size = buffer.byteLength;
  const range = parseRangeHeader(rangeHeader, size);

  if (!range) {
    return new Response(null, {
      status: 416,
      statusText: 'Range Not Satisfiable',
      headers: {
        'Content-Range': `bytes */${size}`,
      },
    });
  }

  const {start, end} = range;
  const chunk = buffer.slice(start, end + 1);
  const headers = new Headers(response.headers);
  headers.set('Content-Length', String(chunk.byteLength));
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Content-Type', response.headers.get('Content-Type') || 'video/mp4');

  return new Response(chunk, {
    status: 206,
    statusText: 'Partial Content',
    headers,
  });
}

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key.startsWith('atlas-media-') && key !== MEDIA_CACHE_NAME).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  if (!isColonelVideoRequest(event.request)) return;

  event.respondWith(
    getOrCacheVideo(event.request).then((response) => {
      const rangeHeader = event.request.headers.get('Range');
      if (!rangeHeader || !response.ok) return response;
      return buildRangeResponse(response, rangeHeader);
    }),
  );
});
