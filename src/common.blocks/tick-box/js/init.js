import TickBox from './TickBox';

const initTickBoxes = function createInstances() {
  $('.js-tick-box').each((i, element) => new TickBox(element));
};

$(document).ready(initTickBoxes);
