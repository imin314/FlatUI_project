import $ from 'jquery';
import ValidationForm from '../../validation-form/js/validation-form';

class EmailForm extends ValidationForm {
  constructor(domElement) {
    super(domElement);
    this.initialize();
  }
}

$('.email-form').each((i, element) => new EmailForm(element));
