/* globals $, jQuery */
require('../vendor/livefilter')

export default function () {
  const $listHeader = $('.list > h2')
  const $filteredList = $listHeader.next('ul')

  $('#search-list').liveFilter('.fuzzy-search', 'li', {
    after: function () {
      $filteredList.each(function (index, element) {
        let filteredEls = []
        const filteredListItems = $(element).children()
        filteredListItems.each(function (index, element) {
          if ($(element).height() > 0) {
            filteredEls.push('filter')
          }
        })
        if (filteredEls.length > 0) {
          $(element).prev('h2').show()
        } else {
          $(element).prev('h2').hide()
        }
      })
    }
  })
}
