const CACHE_NAME = 'eisenhower-cache-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Let network handle dynamic requests, fallback smoothly
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
