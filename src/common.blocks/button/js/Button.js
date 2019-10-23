import bind from 'bind-decorator';
import 'legit-ripple/dist/ripple.min';

class Button {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    this.$button = $(domElement);
    this.$button
      .on('keypress.button', this._handleButtonKeyPress)
      .on('transitionend webkitTransitionEnd oTransitionEnd', this._handleButtonTransitionEnd)
      .ripple({ dragging: false });
    return this;
  }

  @bind
  _handleButtonKeyPress(event) {
    if (event.which === 13) {
      this.$button.click();
    }
  }

  @bind
  _handleButtonTransitionEnd() {
    this.$button.blur();
  }
}

export default Button;
