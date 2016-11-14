/* globals $ */
var touchEventName = ('ontouchstart' in window) ? 'touchstart' : 'click'
$('#js-toggle-menu').on(touchEventName, function () {
  $('#js-menu').toggleClass('is-open')
  $(this).toggleClass('is-active')
})
