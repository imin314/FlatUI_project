import $ from 'jquery';

class ToggleSwitch {
  constructor(domElement) {
    this.domElement = domElement;
    this._initialize();
  }

  _initialize() {
    $(document).ready(() => {
      const $toggle = $(this.domElement);

      $toggle.on('keypress.toggle', e => this._handleEnterPress(e));
    });
  }

  _handleEnterPress(event) {
    if (event.which === 13) {
      const checkbox = $(this.domElement).find('input[type=checkbox]')[0];
      checkbox.checked = !checkbox.checked;
    }
  }
}

$('.js-toggle-switch').each((i, element) => new ToggleSwitch(element));
