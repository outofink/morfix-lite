importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

workbox.precaching.precacheAndRoute([
  {
    "url": "css/material.min.css",
    "revision": "9ab85b48144d24908b4e455c2afb648c"
  },
  {
    "url": "css/styles.css",
    "revision": "52e37f2f5260eb28317262351db52076"
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
    "url": "index.html",
    "revision": "73890a6a24504706d4ab746b2dcc5448"
  },
  {
    "url": "js/material.min.js",
    "revision": "713af0c6ce93dbbce2f00bf0a98d0541"
  },
  {
    "url": "manifest.json",
    "revision": "b05d25d42b3c1bb541982444ebf9f3ee"
  },
  {
    "url": "offline.html",
    "revision": "2c91d3d7435d61bf17a55824bf5b89d6"
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
