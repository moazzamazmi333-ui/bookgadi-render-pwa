self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Ye code app ko force karega ki wo hamesha internet se naya content (Wix site) uthaye
  event.respondWith(fetch(event.request));
});
