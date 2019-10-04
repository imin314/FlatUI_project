class DropDown {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    $(document).ready(() => {
      const $domElement = $(domElement);
      this.$dropdown = $domElement;
      this.$label = $domElement.find('.js-drop-down__label');
      this.$dropdown.on('click.drop-down', e => this._handleDropDownClick(e));
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
}

$('.js-drop-down').each((i, element) => new DropDown(element));
