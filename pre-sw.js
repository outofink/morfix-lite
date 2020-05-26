importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js');

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('activate', function(event) {
  event.waitUntil(
      caches
          .keys()
          .then((keys) => Promise.all(keys.map((key) => caches.delete(key)))),
  );
});

self.addEventListener('fetch', function(event) {
  if (!navigator.onLine) {
    event.respondWith(
        fetch(event.request).catch(function(_error) {
          return caches.match('offline.html');
        }),
    );
  }
});
