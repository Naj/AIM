// AIM — Service Worker (v9)
// v9 : URLs versionnées (?v=9) pour casser le cache navigateur 1 an déjà posé sur les
// appareils visités avant le fix du _headers (v8 seul ne suffisait pas, l'ancienne
// URL sans version restait piégée dans le cache HTTP existant)
const CACHE_NAME = 'aim-v9';
const ASSETS = [
  './',
  './index.html',
  './main.css?v=9',
  './data.js?v=9',
  './data_flash.js?v=9',
  './audio.js?v=9',
  './state.js?v=9',
  './modules.js?v=9',
  './parent.js?v=9',
  './app.js?v=9',
  './features.js?v=9',
  './install.js?v=9',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      // Supprime TOUS les anciens caches, y compris aim-v1/v2/v3/v4
      Promise.all(keys.map((k) => caches.delete(k)))
    ).then(() => caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension')) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            caches.open(CACHE_NAME).then((c) => c.put(event.request, response.clone()));
          }
          return response;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});
