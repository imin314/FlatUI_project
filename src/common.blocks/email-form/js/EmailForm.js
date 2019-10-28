import 'jquery-validation';
import bind from 'bind-decorator';

class EmailForm {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    this.$form = $(domElement);
    this._addFormValidation();
    const $button = this.$form.find('.js-email-form__button');
    $button.on('click.email-form', this._handleButtonClick);
  }

  _addFormValidation() {
    this.$form.validate({
      rules: {
        name: 'required',
        email: {
          required: true,
          email: true,
        },
      },
      errorPlacement() {},
    });
  }

  @bind
  _handleButtonClick() {
    this.$form.submit();
  }
}

export default EmailForm;
