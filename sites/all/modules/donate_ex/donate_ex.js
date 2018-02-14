// donate_ex module js

(function ($) {

  Drupal.behaviors.donate_ex1 = {
    attach: function (context, settings) {

  //$(document).ready(function () {


      $('input[type=radio][name="submitted[amount_options]"]').change(function () {
        console.log('value: ' + this.value);
      });
  //});

    }
  }

})(jQuery);
