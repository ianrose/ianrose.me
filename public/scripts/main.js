$(document).ready(function(){
  'use strict';
  var touchEventName =  ('ontouchstart' in window) ? 'touchstart':'click';
  $('#js-toggle-menu').on(touchEventName, function() {
   $('#js-menu').toggleClass('is-open');
   $(this).toggleClass('is-active');
 });

  var scrollToOffset = 0;

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: (target.offset().top + scrollToOffset)
          }, 800);
          return false;
        }
      }
    });
  });

  // var postList = new List('posts', {
  //   valueNames: ['js-entry-heading-link', 'dek'],
  //   plugins: [ ListFuzzySearch() ]
  // });
  //
  // postList;

});
