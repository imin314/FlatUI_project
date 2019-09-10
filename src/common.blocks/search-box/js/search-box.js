import $ from 'jquery';

class SearchBox {
  constructor(domElement) {
    this.domElement = domElement;
    this._initialize();
  }

  _initialize() {
    $(document).ready(() => {
      const $searchbox = $(this.domElement);
      const $button = $searchbox.find('.search-box__button');
      const $input = $searchbox.find('.search-box__input');
      $searchbox.on('click.searchbox', e => this._handleSearchBoxClick(e));
      $button.on('keypress.searchbox', e => this._handleButtonKeypress(e));
      $input.on('focus.searchbox', () => this._emptyInput());

      if ($searchbox.hasClass('search-box_filled')) {
        this._handleButtonClick($button);
      }
    });
  }

  _handleSearchBoxClick(event) {
    const $element = $(event.target);
    if ($element.hasClass('search-box__button')) {
      this._handleButtonClick($element);
    } else {
      this._emptyInput();
    }
  }

  _handleButtonClick($button) {
    const notFoundMessage = "I've not found what I'm looking for...";
    const $searchBox = $(this.domElement);
    $searchBox.find('.search-box__input').val(notFoundMessage);
    $searchBox.addClass('search-box_filled');
    $button.blur();
  }

  _handleButtonKeypress(event) {
    if (event.which === 13) {
      this._handleButtonClick();
    }
  }

  _emptyInput() {
    const $searchBox = $(this.domElement);
    $searchBox.find('.search-box__input').val('');
    $searchBox.removeClass('search-box_filled');
  }

  _handleInputFocus() {
    const $searchBox = $(this.domElement);
    if ($searchBox.hasClass('search-box_filled')) {
      this._emptyInput();
    }
  }
}

$('.js-search-box').each((i, element) => new SearchBox(element));
