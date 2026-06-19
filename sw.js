// AIM — Service Worker (v8)
// v8 : fix cache CSS/JS bloqué 1 an côté navigateur (voir _headers) qui empêchait
// les mises à jour de main.css/app.js de s'appliquer malgré les bumps de version précédents
const CACHE_NAME = 'aim-v8';
const ASSETS = [
  './',
  './index.html',
  './main.css',
  './data.js',
  './data_flash.js',
  './audio.js',
  './state.js',
  './modules.js',
  './parent.js',
  './app.js',
  './features.js',
  './install.js',
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
