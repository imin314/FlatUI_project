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
        .on('animationend webkitAnimationEnd oAnimationEnd', () => this._handleButtonAnimationEnd())
        .on('keypress.button', e => this._handleEnterPress(e))
        .materialripple();
    });
    return this;
  }

  _handleButtonAnimationEnd() {
    this.$button.blur();
  }

  _handleEnterPress(event) {
    if (event.which === 13) {
      this.$button.click()
    }
  }
}

$('.js-button').each((i, element) => new Button(element));
