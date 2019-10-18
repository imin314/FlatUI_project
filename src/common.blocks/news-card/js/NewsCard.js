import 'jquery-mousewheel';
import 'malihu-custom-scrollbar-plugin';

class NewsCard {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    const $newsCard = $(domElement);
    if ($newsCard.hasClass('news-card_with-scrollbar')) {
      const $text = $newsCard.find('.js-news-card__text');
      $text.mCustomScrollbar();
    }
  }
}

export default NewsCard;
