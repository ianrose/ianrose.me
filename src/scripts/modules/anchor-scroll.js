/* globals location */
export default function (scrollToOffset = 0) {
  $(function () {
    $('a[href*=\\#]:not([href=\\#])').on('click', function (event) {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        let target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        if (target.length) {
          event.preventDefault()
          document.querySelector(this.hash).scrollIntoView({
            behavior: 'smooth'
          })
        }
      }
    })
  })
}
