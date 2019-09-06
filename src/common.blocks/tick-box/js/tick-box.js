import $ from 'jquery';

class TickBox {
  constructor(domElement) {
    this.domElement = domElement;
    this._initialize();
  }

  _initialize() {
    $(document).ready(() => {
      const $tickbox = $(this.domElement);

      $tickbox
        .on('keypress.tickbox', e => this._handleEnterPress(e))
        .on('click.tickbox', () => this._removeFocus());
    });
  }

  _handleEnterPress(event) {
    if (event.which === 13) {
      const checkbox = $(this.domElement).find('input[type=checkbox]')[0];
      checkbox.checked = !checkbox.checked;
    }
  }

  _removeFocus() {
    $(this.domElement).find('.js-tick-box__checkmark').blur();
  }
}

$('.js-tick-box').each((i, element) => new TickBox(element));
