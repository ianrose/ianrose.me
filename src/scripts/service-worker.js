
/* globals caches, fetch */
this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v1').then(function (cache) {
      return cache.addAll([
        '/assets/fonts/Inter-UI-Regular.woff2',
        '/assets/fonts/Inter-UI-Bold.woff2',
        '/assets/fonts/Inter-UI-Black.woff2',
        '/assets/fonts/SourceSerifPro-Regular.otf.woff2',
        '/assets/fonts/SourceSerifPro-It.otf.woff2',
        '/assets/fonts/SourceSerifPro-Bold.otf.woff2'
      ])
    })
  )
})

this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (resp) {
      return resp || fetch(event.request).then(function (response) {
        return caches.open('v1').then(function (cache) {
          cache.put(event.request, response.clone())
          return response
        })
      })
    })
  )
})
