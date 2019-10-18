import SpeakerCard from './SpeakerCard';

const initSpeakerCards = function createInstances() {
  $('.js-speaker-card').each((i, element) => new SpeakerCard(element));
};

$(document).ready(initSpeakerCards);
