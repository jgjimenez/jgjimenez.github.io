const CACHE_NAME = 'radio-vida-eterna-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/script/script.js',
  '/images/Radio_Vida_Eterna_logo.png',
  'https://cloudstream2036.conectarhosting.com/8414/stream' // Agrega la URL del streaming
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
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
