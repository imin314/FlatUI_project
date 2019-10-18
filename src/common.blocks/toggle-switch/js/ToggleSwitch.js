class ToggleSwitch {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    const $domElement = $(domElement);
    this.$toggle = $domElement;
    this.$input = $domElement.find('.js-toggle-switch__checkbox');
    this.$slider = $domElement.find('.js-toggle-switch__slider');
    this.$toggle
      .on('keypress.toggle', this._handleEnterPress.bind(this))
      .on('click.toggle', this._removeFocus.bind(this));
  }

  _handleEnterPress(event) {
    if (event.which === 13) {
      this.$input[0].checked = !this.$input[0].checked;
      this.$input.trigger('change');
    }
  }

  _removeFocus() {
    this.$slider.blur();
  }
}

export default ToggleSwitch;
