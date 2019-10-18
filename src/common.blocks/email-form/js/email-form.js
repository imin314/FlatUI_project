import 'jquery-validation';

class EmailForm {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    $(document).ready(() => {
      const $form = $(domElement);
      $form.validate({
        rules: {
          name: 'required',
          email: {
            required: true,
            email: true,
          },
        },
        errorPlacement() {},
      });
      const $button = $form.find('.js-email-form__button');
      $button.on('click.email-form', () => $form.submit());
    });
  }
}

export default EmailForm;
