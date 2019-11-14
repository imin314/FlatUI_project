import EmailForm from './EmailForm';

const initEmailForms = function createInstances() {
  $('.js-email-form').each((i, element) => new EmailForm(element));
};

$(document).ready(initEmailForms);
