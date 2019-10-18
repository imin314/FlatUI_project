import Button from './Button';

const initButtons = function createInstances() {
  $('.js-button').each((i, element) => new Button(element));
};

$(document).ready(initButtons);
