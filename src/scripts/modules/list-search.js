/* globals $, jQuery */
require('../vendor/livefilter')

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
