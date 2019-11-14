import NewsCard from './NewsCard';

const initNewsCards = function createInstances() {
  $('.js-news-card').each((i, element) => new NewsCard(element));
};

$(document).ready(initNewsCards);

