import ValidationForm from '../../validation-form/js/validation-form';

class RegistrationForm extends ValidationForm {
  constructor(domElement) {
    super(domElement, 'registration-form');
    this._initialize();
  }

  _initialize() {
    super.initialize();

    $(document).ready(() => {
      const $form = $(this.domElement);
      const $button = $form.find('.js-registration-form__button');
      $button.on('click.registration-form', () => $form.submit());
    });
  }
}

$('.js-registration-form__form').each((i, element) => new RegistrationForm(element));
