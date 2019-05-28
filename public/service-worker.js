importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute([
  {
    "url": "css/material.min.css",
    "revision": "9ab85b48144d24908b4e455c2afb648c"
  },
  {
    "url": "css/styles.css",
    "revision": "3d8bf26a398b576e1cce30c6f47eb0e4"
  },
  {
    "url": "icons/ml192.png",
    "revision": "60b8cd01bac498ba9415fe574b552344"
  },
  {
    "url": "icons/ml512.png",
    "revision": "4190c662792172e136cc6a88dee42348"
  },
  {
    "url": "js/material.min.js",
    "revision": "713af0c6ce93dbbce2f00bf0a98d0541"
  },
  {
    "url": "manifest.json",
    "revision": "2bf081b42efa1121e0865250b1397eb7"
  },
  {
    "url": "offline.html",
    "revision": "afbe22c6e84f5cdb95f35872aacc0c1c"
  }
])

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
