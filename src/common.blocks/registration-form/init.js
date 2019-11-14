import RegistrationForm from './RegistrationForm';

const initRegistrationForms = function createInstances() {
  $('.js-registration-form').each((i, element) => new RegistrationForm(element));
};

$(document).ready(initRegistrationForms);
