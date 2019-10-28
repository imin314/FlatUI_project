import bind from 'bind-decorator';

class SearchBox {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    this._findElements(domElement);
    this.$searchbox
      .on('click.searchbox', this._handleSearchBoxClick)
      .on('keypress.searchbox', this._handleSearchBoxKeyPress);
    this.$input.on('focus.searchbox', this._handleInputFocus);

    if (this.$searchbox.hasClass('search-box_filled')) {
      this._addNotFoundMessage();
    }
  }

  _findElements(domElement) {
    const $searchbox = $(domElement);
    this.$searchbox = $searchbox;
    this.$button = $searchbox.find('.js-search-box__button');
    this.$input = $searchbox.find('.js-search-box__input');
  }

  @bind
  _handleSearchBoxClick(event) {
    const $element = $(event.target);
    if ($element.hasClass('js-search-box__button')) {
      this._handleButtonClick(event);
    }
  }

  @bind
  _handleSearchBoxKeyPress(event) {
    if (event.which === 13) {
      this._handleButtonClick(event);
    }
  }

  @bind
  _handleInputFocus() {
    if (this.$searchbox.hasClass('search-box_filled')) {
      this._emptyInput();
    }
  }

  @bind
  _handleButtonClick(event) {
    this._addNotFoundMessage();
    $(event.target).blur();
  }

  _addNotFoundMessage() {
    const notFoundMessage = "I've not found what I'm looking for...";
    this.$input.val(notFoundMessage);
    this.$searchbox.addClass('search-box_filled');
  }

  _emptyInput() {
    this.$input.val('');
    this.$searchbox.removeClass('search-box_filled');
  }
}

export default SearchBox;
