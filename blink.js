$(document).ready(function() {
  (function($) {
    $.fn.blinkify = function(speed) {
      var selected = this;

      function blink() {
        selected.fadeToggle(speed);
      }
      setInterval(blink,speed);
    };
  }(jQuery));

  $('#blink-1').blinkify(3000);
  $('#blink-2').blinkify(2000);
});
