import $ from 'jquery';
import './jquery.materialripple';

class Button {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    $(document).ready(() => {
      this.$button = $(domElement);
      this.$button
        .on('keypress.ripple', e => this._handleEnterPress(e))
        .addClass('ripple')
        .materialripple();
    });
    return this;
  }

  _handleEnterPress(event) {
    if (event.which === 13) {
      this.$button.click();
    }
  }
}

$('.js-button').each((i, element) => new Button(element));
