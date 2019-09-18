import $ from 'jquery';

class ArrowButton {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    $(document).ready(() => {
      this.$button = $(domElement);

      this.$button.on('click.arrowbutton', () => this._handleButtonClick())
        .on('keydown.arrowbutton', e => this._handleEnterDown(e))
        .on('keyup.arrowbutton', e => this._handleEnterUp(e));
    });
  }

  _handleButtonClick() {
    this.$button.blur();
  }

  _handleEnterDown(event) {
    if (event.which === 13) {
      this.$button.addClass('arrow-button_active');
    }
  }

  _handleEnterUp(event) {
    if (event.which === 13) {
      this.$button
        .removeClass('arrow-button_active')
        .blur()
        .trigger('click');
    }
  }
}

$('.js-arrow-button').each((i, element) => new ArrowButton(element));
