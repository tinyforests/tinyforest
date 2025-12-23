const CACHE_NAME = 'findmyevc-v1';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/contact.html',
  '/evc.html',
  '/assets/styles.css',
  '/assets/app.js',
  '/assets/evc-fetch.js',
  '/assets/config.js',
  '/data/evc_index.json',
  '/data/evc_pages.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip external requests and tile servers
  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(request).then((response) => {
        if (!response || response.status !== 200) {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });
        return response;
      });
    })
  );
});
```

---

**robots.txt**
```
User-agent: *
Allow: /

Sitemap: https://findmyevc.com/sitemap.xml
