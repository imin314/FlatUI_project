import 'legit-ripple/dist/ripple.min';

class Button {
  constructor(domElement) {
    $(document).ready(this._initialize.bind(this, domElement));
  }

  _initialize(domElement) {
    this.$button = $(domElement);
    this.$button
      .on('keypress.button', this._handleEnterPress.bind(this))
      .on('transitionend webkitTransitionEnd oTransitionEnd', this._handleButtonAnimationEnd.bind(this))
      .ripple({ dragging: false });
    return this;
  }

  _handleButtonAnimationEnd() {
    this.$button.blur();
  }

  _handleEnterPress(event) {
    if (event.which === 13) {
      this.$button.click();
    }
  }
}

export default Button;
