import 'jquery-validation';

class ValidationInput {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    const $container = $(domElement);
    this.$input = $container.find('.js-validation-input__input');
    this.$bubble = $container.find('.js-validation-input__bubble');
    this.bubbleModifiers = {
      good: 'validation-input__bubble_type_good',
      error: 'validation-input__bubble_type_error',
      hidden: 'validation-input__bubble_hidden',
    };

    this.$input
      .on('blur.validation', () => this._handleInputBlur())
      .on('focus.validation', () => this._handleInputFocus());
  }

  _handleInputBlur() {
    const { good, error, hidden } = this.bubbleModifiers;
    if (this.$input.valid()) {
      this.$bubble
        .removeClass(`${error} ${hidden}`)
        .addClass(good)
        .text('Thanks!');
    } else {
      this.$bubble
        .removeClass(`${good} ${hidden}`)
        .addClass(error)
        .text('Error');
    }
  }

  _handleInputFocus() {
    const { good, error, hidden } = this.bubbleModifiers;
    this.$bubble
      .addClass(hidden)
      .removeClass(`${good} ${error}`);
  }
}

$('.js-validation-input').each((i, element) => new ValidationInput(element));