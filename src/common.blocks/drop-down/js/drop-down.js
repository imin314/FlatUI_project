class DropDown {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    $(document).ready(() => {
      const $domElement = $(domElement);
      this.$dropdown = $domElement;
      this.$label = $domElement.find('.js-drop-down__label');
      this.$dropdown
        .on('click.drop-down', e => this._handleDropDownClick(e))
        .on('keypress.drop-down', e => this._handleDropDownKeypress(e));
    });
  }

  _handleDropDownClick(event) {
    const $targetElement = $(event.target);
    const isItemChosen = $targetElement.hasClass('js-drop-down__item');
    this.$dropdown.toggleClass('drop-down_active');

    if (isItemChosen) {
      const chosenOption = $targetElement.text();
      this.$label.text(chosenOption);
    }
  }

  _handleDropDownFocusOut() {
    this.$dropdown.removeClass('drop-down_active');
  }

  _handleDropDownKeypress(event) {
    if (event.which === 13) {
      $(event.target).click();
      return false;
    }
  }
}

$('.js-drop-down').each((i, element) => new DropDown(element));
