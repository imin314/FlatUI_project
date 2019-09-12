import $ from 'jquery';
import 'jquery-validation';

export default class ValidationForm {
  constructor(domElement, namespace) {
    this.domElement = domElement;
    this.namespace = namespace;
  }

  initialize() {
    $(document).ready(() => {
      const $domElement = $(this.domElement);
      this.bubbleErrorClass = `${this.namespace}__bubble_type_error`;
      this.bubbleGoodClass = `${this.namespace}__bubble_type_good`;
      const $inputs = $domElement.find('input[type=text], input[type=email]');

      $domElement.validate({ errorPlacement() {} });

      $inputs
        .rules('add', {
          required: true,
          minlength: 2,
          messages: {
            required: '',
            minlength: '',
            email: '',
          },
        });

      $inputs
        .on('blur.validation', e => this._handleInputBlur(e))
        .on('focus.validation', e => this._handleInputFocus(e));
    });
  }

  _handleInputBlur(event) {
    const $input = $(event.target);
    const $bubble = $input.next();
    if ($input.valid()) {
      $bubble.removeClass(this.bubbleErrorClass).addClass(this.bubbleGoodClass);
      $bubble.text('Thanks!');
    } else {
      $bubble.removeClass(this.bubbleGoodClass).addClass(this.bubbleErrorClass);
      $bubble.text('Error');
    }
  }

  _handleInputFocus(event) {
    const $bubble = $(event.target).next();
    $bubble.removeClass(this.bubbleGoodClass).removeClass(this.bubbleErrorClass);
  }
}
