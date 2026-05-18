// A minimal service worker to satisfy PWA install requirements
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Leave blank. Just having this listener makes it a valid PWA.
});