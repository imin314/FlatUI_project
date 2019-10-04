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
    $(document).ready(() => {
      this.$searchbox
        .on('click.searchbox', e => this._handleSearchBoxClick(e))
        .on('keypress.searchbox', e => this._handleSearchBoxKeypress(e));
      this.$input.on('focus.searchbox', () => this._handleInputFocus());

      if (this.$searchbox.hasClass('search-box_filled')) {
        this._handleButtonClick();
      }
    });
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

$('.js-search-box').each((i, element) => new SearchBox(element));
