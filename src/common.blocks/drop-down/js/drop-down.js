import $ from 'jquery';

class DropDown {
  constructor(domElement) {
    this.domElement = domElement;
    this._initialize();
  }

  _initialize() {
    $(document).ready(() => {
      const $dropdown = $(this.domElement);
      $dropdown.on('click.drop-down', e => this._handleDropDownClick(e));
    });
  }

  _handleDropDownClick(event) {
    const $dropdown = $(this.domElement);
    const $targetElement = $(event.target);
    const isItemChosen = $targetElement.hasClass('js-drop-down__item');
    $dropdown.toggleClass('drop-down_active');

    if (isItemChosen) {
      const chosenOption = $targetElement.text();
      $dropdown.find('.js-drop-down__label').text(chosenOption);
    }
  }

  _handleDropDownFocusOut() {
    const $dropdown = $(this.domElement);
    $dropdown.removeClass('drop-down_active');
  }
}

$('.js-drop-down').each((i, element) => new DropDown(element));
