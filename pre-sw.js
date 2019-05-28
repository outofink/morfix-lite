importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute([])

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches
    .keys()
    .then(keys => Promise.all(keys.map(key => caches.delete(key))))
  );
});

self.addEventListener('fetch', function (event) {
  if (!navigator.onLine) {
    event.respondWith(
      fetch(event.request).catch(function (_error) {
        return caches.match('offline.html');
      })
    )
  }
});
