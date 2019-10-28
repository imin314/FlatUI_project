import bind from 'bind-decorator';

class TickBox {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    const $domElement = $(domElement);
    this.$tickbox = $domElement;
    this.$input = $domElement.find('.js-tick-box__input');
    this.$checkmark = $domElement.find('.js-tick-box__checkmark');
    this.$tickbox
      .on('keypress.tickbox', this._handleTickboxKeyPress)
      .on('click.tickbox', this._handleTickboxClick);
  }

  @bind
  _handleTickboxKeyPress(event) {
    if (event.which === 13) {
      this.$input[0].checked = !this.$input[0].checked;
      this.$input.trigger('change');
    }
  }

  @bind
  _handleTickboxClick() {
    this.$checkmark.trigger('blur');
  }
}

export default TickBox;
