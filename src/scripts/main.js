/*globals $, location */
$(document).ready(function () {
  require('./vendor/prism')
  require('./vendor/livefilter')

  var touchEventName = ('ontouchstart' in window) ? 'touchstart' : 'click'
  $('#js-toggle-menu').on(touchEventName, function () {
    $('#js-menu').toggleClass('is-open')
    $(this).toggleClass('is-active')
  })

  var scrollToOffset = 0

  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        if (target.length) {
          $('html,body').animate({
            scrollTop: (target.offset().top + scrollToOffset)
          }, 800)
          return false
        }
      }
    })
  })

  var $listHeader = $('.list > h2')
  var $filteredList = $listHeader.next('ul')

  $('#search-list').liveFilter('.fuzzy-search', 'li', {
    after: function () {
      $filteredList.each(function (index, element) {
        var filteredListItems = $(element).children(':visible').length
        if (filteredListItems > 0) {
          $(element).prev('h2').show()
        } else {
          $(element).prev('h2').hide()
        }
      })
    }
  })
})
