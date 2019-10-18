class DropDown {
  constructor(domElement) {
    $(document).ready(this._initialize.bind(this, domElement));
  }

  _initialize(domElement) {
    const $domElement = $(domElement);
    this.$dropdown = $domElement;
    this.$label = $domElement.find('.js-drop-down__label');
    this.$dropdown
      .on('click.drop-down', this._handleDropDownClick.bind(this))
      .on('keypress.drop-down', this._handleDropDownKeypress.bind(this));
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
    return true;
  }
}

export default DropDown;
