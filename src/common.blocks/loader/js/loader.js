import $ from 'jquery';

class Loader {
  constructor(domElement) {
    this.$domElement = $(domElement);
    this._initialize();
  }

  _initialize() {
    $(window).on('load', () => {
      this.$domElement.fadeOut('slow');
    });
  }
}

$('.js-loader').each((i, element) => new Loader(element));
