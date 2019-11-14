import EventCarousel from './EventCarousel';

const initEventCarousels = function createInstances() {
  $('.js-event-carousel').each((i, element) => new EventCarousel(element));
};

$(document).ready(initEventCarousels);
