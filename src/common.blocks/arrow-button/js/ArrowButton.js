class ArrowButton {
  constructor(domElement) {
    $(document).ready(this._initialize.bind(this, domElement));
  }

  _initialize(domElement) {
    this.$button = $(domElement);

    this.$button
      .on('click.arrowbutton', this._handleButtonClick.bind(this))
      .on('keydown.arrowbutton', this._handleEnterDown.bind(this))
      .on('keyup.arrowbutton', this._handleEnterUp.bind(this))
      .on('touchstart.arrowbutton', this._addActiveClass.bind(this))
      .on('touchend.arrowbutton', this._removeActiveClass.bind(this));
  }

  _handleButtonClick() {
    this.$button.blur();
  }

  _addActiveClass() {
    this.$button.addClass('arrow-button_active');
  }

  _removeActiveClass() {
    this.$button
      .removeClass('arrow-button_active')
      .trigger('click');
  }

  _handleEnterDown(event) {
    if (event.which === 13) {
      this._addActiveClass();
    }
  }

  _handleEnterUp(event) {
    if (event.which === 13) {
      this._removeActiveClass();
    }
  }
}

export default ArrowButton;
