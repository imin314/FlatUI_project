class ArrowButton {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    $(document).ready(() => {
      this.$button = $(domElement);

      this.$button
        .on('click.arrowbutton', () => this._handleButtonClick())
        .on('keydown.arrowbutton', e => this._handleEnterDown(e))
        .on('keyup.arrowbutton', e => this._handleEnterUp(e))
        .on('touchstart.arrowbutton', () => this._addActiveClass())
        .on('touchend.arrowbutton', () => this._removeActiveClass());
    });
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

$('.js-arrow-button').each((i, element) => new ArrowButton(element));
