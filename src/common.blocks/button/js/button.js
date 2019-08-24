import $ from 'jquery';
import './jquery.materialripple';

class Button {
  constructor(domElement) {
    this.domElement = domElement;
    this._initialize();
  }

  _initialize() {
    $(document).ready(() => {
      const $button = $(this.domElement);
      $button.addClass('ripple').materialripple();

      $button.on('keypress.ripple', e => this._handleEnterPress(e));
    });
    return this;
  }

  _handleEnterPress(event) {
    if (event.which === 13) {
      $(this.domElement).click();
    }
  }
}

$('.js-button').each((i, element) => new Button(element));
