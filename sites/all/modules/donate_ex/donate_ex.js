// donate_ex module js


Drupal.behaviors.donate_ex = {
  attach: function (context, settings) {

    console.log('Inside donate_ex.js');

    $('.form-item-submitted-amount-options').change(function () {
      console.log('1' . this.value);
    }

    $('input[type=radio][name=submitted[amount_options]]').change(function () {
      console.log('2' + this.value);
    }

  }
}
