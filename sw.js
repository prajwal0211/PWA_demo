if (servicekorker in navigator) {
    window.addEventListener("load", function () {
    navigator.serviceWorker.register('/sw.js', {scope: "/"}).then(function (registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope:', registration.scope);
    }, function (err) {
    // registration failed:
    console.log('Servicellorker registration failed: ', err);
    });
})
}

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
'/',
'index.html',
/* '/styles/main.css',
'/script/main.js' */
];
self.addEventListener('install', function (event) {
// Perform install steps
event.waitUntil(
caches.open(CACHE_NAME)
.then(function (cache) {
console.log('Opened cache');
return cache.addAll(urlsToCache);
})
)
});