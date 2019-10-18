import SearchBox from './SearchBox';

const initSearchBoxes = function createInstances() {
  $('.js-search-box').each((i, element) => new SearchBox(element));
};

$(document).ready(initSearchBoxes);
