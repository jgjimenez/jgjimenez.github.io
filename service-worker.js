const CACHE_NAME = 'radio-vida-eterna-cache-v6';
const urlsToCache = [
  '/',
  '/index.html',
  '/info.html',
  '/donacion.html',
  '/cronograma.html',
  '/css/styles.css',
  '/script/script.js',
  '/images/Radio_Vida_Eterna_logo.png',
  '/images/Radio_Vida_Eterna_logo_192.png',
  '/images/Radio_Vida_Eterna_logo_512.png',
  '/images/fondo.jpg',
  '/images/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('conectarhosting.com/8414/stream')) {
    return fetch(event.request);
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request)
        .then(fetchResponse => {
          const responseClone = fetchResponse.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseClone));
          return fetchResponse;
        })
        .catch(() => caches.match('/index.html'))
      )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => 
      Promise.all(
        cacheNames.map(cacheName => 
          cacheName !== CACHE_NAME ? caches.delete(cacheName) : null
        )
      )
    )
  );
});
