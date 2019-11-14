import bind from 'bind-decorator';

class DropDown {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    const $domElement = $(domElement);
    this.$dropdown = $domElement;
    this.$label = $domElement.find('.js-drop-down__label');
    this.$dropdown
      .on('click.drop-down', this._handleDropDownClick)
      .on('keypress.drop-down', this._handleDropDownKeyPress);
  }

  @bind
  _handleDropDownClick(event) {
    const $targetElement = $(event.target);
    const isItemChosen = $targetElement.hasClass('js-drop-down__item');
    this.$dropdown.toggleClass('drop-down_active');

    if (isItemChosen) {
      const chosenOption = $targetElement.text();
      this.$label.text(chosenOption);
    }
  }

  @bind
  _handleDropDownKeyPress(event) {
    if (event.which === 13) {
      $(event.target).click();
    }
  }
}

export default DropDown;
