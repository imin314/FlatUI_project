import bind from 'bind-decorator';
import 'jquery-validation';

class ValidationInput {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    const $container = $(domElement);
    this.$input = $container.find('.js-validation-input__input');
    this.$bubble = $container.find('.js-validation-input__bubble');
    this.bubbleText = { ...this.$bubble.data() };
    this.bubbleModifiers = {
      good: 'validation-input__bubble_type_good',
      error: 'validation-input__bubble_type_error',
      hidden: 'validation-input__bubble_hidden',
    };

    this.$input
      .on('blur.validation', this._handleInputBlur)
      .on('focus.validation', this._handleInputFocus);
  }

  @bind
  _handleInputBlur() {
    const isInputValid = this.$input.valid();
    const currentState = isInputValid ? 'good' : 'error';
    const currentClass = this.bubbleModifiers[currentState];
    const currentText = this.bubbleText[currentState];
    this.$bubble
      .removeClass(Object.values(this.bubbleModifiers).join(' '))
      .addClass(currentClass)
      .text(currentText);
  }

  @bind
  _handleInputFocus() {
    const { good, error, hidden } = this.bubbleModifiers;
    this.$bubble
      .addClass(hidden)
      .removeClass(`${good} ${error}`);
  }
}

export default ValidationInput;
