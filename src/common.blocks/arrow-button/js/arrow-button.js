import $ from 'jquery';

class ArrowButton {
  constructor(domElement) {
    this.domElement = domElement;
    this._initialize();
  }

  _initialize() {
    $(document).ready(() => {
      const $button = $(this.domElement);

      $button.on('mousedown.arrowbutton', e => e.preventDefault())
        .on('keydown.arrowbutton', e => this._handleEnterDown(e))
        .on('keyup.arrowbutton', e => this._handleEnterUp(e));
    });
  }

  _handleEnterDown(event) {
    if (event.which === 13) {
      $(this.domElement).addClass('arrow-button_active');
    }
  }

  _handleEnterUp(event) {
    if (event.which === 13) {
      $(this.domElement).removeClass('arrow-button_active').blur();
    }
  }
}

$('.js-arrow-button').each((i, element) => new ArrowButton(element));
