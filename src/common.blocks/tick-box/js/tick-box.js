class TickBox {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    $(document).ready(() => {
      const $domElement = $(domElement);
      this.$tickbox = $domElement;
      this.$input = $domElement.find('.js-tick-box__input');
      this.$checkmark = $domElement.find('.js-tick-box__checkmark');
      this.$tickbox
        .on('keypress.tickbox', e => this._handleEnterPress(e))
        .on('click.tickbox', () => this._removeFocus());
    });
  }

  _handleEnterPress(event) {
    if (event.which === 13) {
      this.$input[0].checked = !this.$input[0].checked;
      this.$input.trigger('change');
    }
  }

  _removeFocus() {
    this.$checkmark.blur();
  }
}

export default TickBox;
