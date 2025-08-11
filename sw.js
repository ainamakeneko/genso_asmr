const CACHE_NAME = 'periodic-table-asmr-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/elements-data.js',
    '/manifest.json'
];

// インストール時にキャッシュを作成
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// フェッチ時にキャッシュから返す
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // キャッシュにあればそれを返す、なければネットワークから取得
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// アップデート時に古いキャッシュを削除
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});