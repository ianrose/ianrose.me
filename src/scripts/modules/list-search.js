/* globals $, jQuery */
import '../vendor/livefilter'

module.exports = function () {
  const $listHeader = $('.list > h2')
  const $filteredList = $listHeader.next('ul')

  $('#search-list').liveFilter('.fuzzy-search', 'li', {
    after: function () {
      $filteredList.each(function (index, element) {
        const filteredListItems = $(element).children(':visible').length
        if (filteredListItems > 0) {
          $(element).prev('h2').show()
        } else {
          $(element).prev('h2').hide()
        }
      })
    }
  })
}
