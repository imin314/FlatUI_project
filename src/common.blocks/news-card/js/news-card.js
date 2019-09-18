import $ from 'jquery';

class NewsCard {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    const $newsCard = $(domElement);
    if ($newsCard.hasClass('news-card_with_scrollbar')) {
      const $text = $newsCard.find('.js-news-card__text');
      $text.mCustomScrollbar();
    }
  }
}

$('.js-news-card').each((i, element) => new NewsCard(element));
