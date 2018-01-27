
/* globals caches, fetch */
this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v1').then(function (cache) {
      return cache.addAll([
        '/assets/fonts/H5c1IXWmGNYIe0-400.woff2',
        '/assets/fonts/H5c1IXWmGNYIe0-700.woff2',
        '/assets/fonts/H5c1IXWmGNYIe0-900.woff2',
        '/assets/fonts/5iIOE5lzbMEQrK-400.woff2',
        '/assets/fonts/5iIOE5lzbMEQrK-400i.woff2',
        '/assets/fonts/5iIOE5lzbMEQrK-700.woff2'
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
