import $ from 'jquery';

class PassSelector {
  constructor(domElement) {
    this.$domElement = $(domElement);
    this._initialize();
  }

  _initialize() {
    $(document).ready(() => {
      const $tickboxes = this.$domElement.find('.js-pass-selector__tickbox input[type=checkbox]');
      $tickboxes.on('change', () => {
        $tickboxes.not(this).prop('checked', false);
      });
    });
  }
}

$('.js-pass-selector').each((i, element) => new PassSelector(element));
