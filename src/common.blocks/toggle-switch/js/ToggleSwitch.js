import bind from 'bind-decorator';

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
      .on('keypress.toggle', this._handleToggleKeyPress)
      .on('click.toggle', this._handleToggleClick);
  }

  @bind
  _handleToggleKeyPress(event) {
    if (event.which === 13) {
      this.$input[0].checked = !this.$input[0].checked;
      this.$input.trigger('change');
    }
  }

  @bind
  _handleToggleClick() {
    this.$slider.blur();
  }
}

export default ToggleSwitch;
