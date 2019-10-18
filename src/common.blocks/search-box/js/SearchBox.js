class SearchBox {
  constructor(domElement) {
    this._findElements(domElement);
    this._initialize();
  }

  _findElements(domElement) {
    const $searchbox = $(domElement);
    this.$searchbox = $searchbox;
    this.$button = $searchbox.find('.js-search-box__button');
    this.$input = $searchbox.find('.js-search-box__input');
  }

  _initialize() {
    this.$searchbox
      .on('click.searchbox', this._handleSearchBoxClick.bind(this))
      .on('keypress.searchbox', this._handleSearchBoxKeypress.bind(this));
    this.$input.on('focus.searchbox', this._handleInputFocus.bind(this));

    if (this.$searchbox.hasClass('search-box_filled')) {
      this._handleButtonClick();
    }
  }

  _handleSearchBoxClick(event) {
    const $element = $(event.target);
    if ($element.hasClass('js-search-box__button')) {
      this._handleButtonClick(event);
    }
  }

  _handleButtonClick(event) {
    const notFoundMessage = "I've not found what I'm looking for...";
    this.$input.val(notFoundMessage);
    this.$searchbox.addClass('search-box_filled');
    if (event !== undefined) {
      $(event.target).blur();
    }
  }

  _handleSearchBoxKeypress(event) {
    if (event.which === 13) {
      this._handleButtonClick(event);
    }
  }

  _emptyInput() {
    this.$input.val('');
    this.$searchbox.removeClass('search-box_filled');
  }

  _handleInputFocus() {
    if (this.$searchbox.hasClass('search-box_filled')) {
      this._emptyInput();
    }
  }
}

export default SearchBox;
