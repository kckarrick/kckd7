/**
 *  donate_ex module js
 *
 */
Drupal.behaviors.donate_ex = {
  attach: function (context, settings) {

  $('.form-item-submitted-amount-options').change(function () {
    console.log(this.value);
  }


}
