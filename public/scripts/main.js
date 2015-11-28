$(document).ready(function(){
  'use strict';
 $('#js-toggle-menu').click(function() {
   $('#js-menu').toggleClass('is-open');
   $(this).toggleClass('is-active');
 });
});
