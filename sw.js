self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Yeh code hamesha fresh website load karega
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
