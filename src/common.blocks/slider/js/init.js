import Slider from './Slider';

const initSliders = function createInstances() {
  $('.js-slider').each((i, element) => new Slider(element));
};

$(document).ready(initSliders);
