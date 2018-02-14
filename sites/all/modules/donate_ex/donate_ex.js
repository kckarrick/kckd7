// donate_ex module js

(function ($) {

  Drupal.behaviors.donate_ex1 = {
    attach: function (context, settings) {

      $('input[type=radio][name="submitted[amount_options]"]').change(function () {
        console.log('value: ' + this.value);
        var theval = '';
        if (this.value == 'a1') {
          theval = '20';
        }
        else if (this.value == 'a2') {
          theval = '50';
        }
        else if (this.value == 'a3') {
          theval = '100';
        }
        $('#edit-submitted-amount').val(theval);
        if (theval == '') {
          $('#edit-submitted-amount').focus().show();
        }
        else {
          $('#edit-submitted-amount').hide();
        }
      });
    }
  }

})(jQuery);
