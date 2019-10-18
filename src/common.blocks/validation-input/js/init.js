import ValidationInput from './ValidationInput';

const initValidationInputs = function createInstances() {
  $('.js-validation-input').each((i, element) => new ValidationInput(element));
};

$(document).ready(initValidationInputs);
