const CACHE_NAME = 'radio-vida-eterna-cache-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/info.html',
    '/donaciones.html',
    '/cronograma.html',
    '/css/styles.css',
    '/script/script.js',
    '/images/Radio_Vida_Eterna_logo_192.png',
    '/images/Radio_Vida_Eterna_logo_512.png'
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
  // Excluir el stream de audio del caché
  if (event.request.url.includes('conectarhosting.com/8414/stream')) {
    return fetch(event.request);
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request)
          .then(fetchResponse => {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request.url, fetchResponse.clone());
              return fetchResponse;
            });
          });
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
