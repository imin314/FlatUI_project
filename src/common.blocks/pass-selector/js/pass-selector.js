class PassSelector {
  constructor(domElement) {
    this.$domElement = $(domElement);
    this._initialize();
  }

  _initialize() {
    $(document).ready(() => {
      this.$tickboxes = this.$domElement.find('.js-pass-selector__tickbox input[type=checkbox]');
      this.$tickboxes.on('change.pass-selector', e => this._handleTickboxChange(e));
    });
  }

  _handleTickboxChange(event) {
    const $currentTickbox = $(event.target);
    this.$tickboxes.not($currentTickbox).prop('checked', false);
  }
}

$('.js-pass-selector').each((i, element) => new PassSelector(element));
