import 'legit-ripple/dist/ripple.min';

class Button {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    $(document).ready(() => {
      this.$button = $(domElement);
      this.$button
        .on('keypress.button', e => this._handleEnterPress(e))
        .on('transitionend webkitTransitionEnd oTransitionEnd', () => this._handleButtonAnimationEnd())
        .ripple({ dragging: false });
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
