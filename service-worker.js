const CACHE_NAME = 'radio-vida-eterna-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/script/script.js',
  '/images/Radio_Vida_Eterna_logo.png' // Removí el stream de aquí
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  // Excluir el stream de audio del cache
  if (event.request.url.includes('conectarhosting.com/8414/stream')) {
    return fetch(event.request); // No usar cache para el stream
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
          return null;
        })
      );
    })
  );
});
