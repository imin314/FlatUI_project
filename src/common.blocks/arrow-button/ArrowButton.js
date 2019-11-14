import bind from 'bind-decorator';

class ArrowButton {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    this.$button = $(domElement);

    this.$button
      .on('click.arrowbutton', this._handleButtonClick)
      .on('keydown.arrowbutton', this._handleButtonKeyDown);
  }

  @bind
  _handleButtonClick() {
    this.$button.blur();
  }

  @bind
  _handleButtonKeyDown(event) {
    if (event.which === 13) {
      this.$button.click();
    }
  }
}

export default ArrowButton;
