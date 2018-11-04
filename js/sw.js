console.log('Service Worker: Registered');
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open(.'v1').then(function(cache) {
			return cache.addAll(cacheFiles);
		})

	);

});

