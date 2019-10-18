import SpeakerCarousel from './SpeakerCarousel';

const initSpeakerCarousels = function createInstances() {
  $('.js-speaker-carousel').each((i, element) => new SpeakerCarousel(element));
};

$(document).ready(initSpeakerCarousels);
