const CACHE_NAME = 'drawsta-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon-512.png' // Make sure this filename matches your icon
];

// Install the service worker and cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

// Serve files from cache when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
