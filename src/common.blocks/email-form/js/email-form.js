import $ from 'jquery';
import ValidationForm from '../../validation-form/js/validation-form';

class EmailForm extends ValidationForm {
  constructor(domElement) {
    super(domElement);
    this._initialize();
  }

  _initialize() {
    super.initialize();

    $(document).ready(() => {
      const $form = $(this.domElement);
      const $button = $form.find('.js-email-form__button');
      $button.on('click.email-form', () => $form.submit());
    });
  }
}

$('.js-email-form').each((i, element) => new EmailForm(element));
