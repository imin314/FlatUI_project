import $ from 'jquery';

class SpeakerCard {
  constructor(domElement) {
    this.domElement = $(domElement);
    this._initialize();
  }

  _initialize() {
    $(window).on('load.speakercard', () => this._addScrollBar());
  }

  _addScrollBar() {
    this.domElement.find('.js-speaker-card__text').mCustomScrollbar();
  }
}

$('.js-speaker-card').each((i, element) => new SpeakerCard(element));
