// donate_ex module js

(function ($) {

  console.log('Inside donate_ex.js');

  //Drupal.behaviors.donate_ex1 = {
  //  attach: function (context, settings) {

  $(document).ready(function () {
      console.log('Inside donate_ex.js');

      $('.form-item-submitted-amount-options').change(function () {
        console.log('1: ' + $(this).val());
      });

      //$('input[type=radio][name=submitted[amount_options]]').change(function () {
      //  console.log('2' + this.value);
      //});
  });

  //  }
  //}

})(jQuery);
