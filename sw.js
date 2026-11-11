// AIM — Service Worker (v10)
// v10 : mise à jour CE2 — banque data_ce2.js (+104 questions sur TOUS les modules)
// et ateliers ce2.js : dénombrement, problèmes entendus, accord du groupe nominal,
// familles de mots, textes entendus, plan de travail sur l'accueil.
// URLs repassées en ?v=10 pour forcer le rafraîchissement du cache navigateur.
const CACHE_NAME = 'aim-v10';
const ASSETS = [
  './',
  './index.html',
  './main.css?v=10',
  './data.js?v=10',
  './data_ce2.js?v=10',
  './data_flash.js?v=10',
  './audio.js?v=10',
  './state.js?v=10',
  './modules.js?v=10',
  './parent.js?v=10',
  './ce2.js?v=10',
  './app.js?v=10',
  './features.js?v=10',
  './install.js?v=10',
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
