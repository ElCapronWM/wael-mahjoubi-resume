# Service Worker for Wael Mahjoubi Resume

const CACHE_NAME = 'wael-mahjoubi-resume-v1';
const urlsToCache = [
  '/',
  '/wael-mahjoubi-resume.html',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://media.licdn.com/dms/image/v2/D4E22AQGkhno5c1FN4g/feedshare-shrink_2048_1536/B4EZmwyTBZKkAw-/0/1759607618392?e=1762992000&v=beta&t=MEnhCfiRC5vj0FU3eDwOSpvr9a0DyN8pst3bP4AoMmI'
];

// Install event
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
