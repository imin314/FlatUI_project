import 'jquery-mousewheel';
import 'malihu-custom-scrollbar-plugin';

class SpeakerCard {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    this.$text = $(domElement).find('.js-speaker-card__text');
    $(window).on('load.speakercard', () => this._addScrollBar());
  }

  _addScrollBar() {
    this.$text.mCustomScrollbar();
  }
}

export default SpeakerCard;
