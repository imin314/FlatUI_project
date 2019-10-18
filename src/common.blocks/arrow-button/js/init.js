import ArrowButton from './ArrowButton';

const initArrowButtons = function createInstances() {
  $('.js-arrow-button').each((i, element) => new ArrowButton(element));
};

$(document).ready(initArrowButtons);
