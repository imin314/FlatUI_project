import PassSelector from './PassSelector';

const initPassSelectors = function createInstances() {
  $('.js-pass-selector').each((i, element) => new PassSelector(element));
};

$(document).ready(initPassSelectors);
