class PassSelector {
  constructor(domElement) {
    this.$domElement = $(domElement);
    this._initialize();
  }

  _initialize() {
    this.$tickboxes = this.$domElement.find('input[type=checkbox]');
    this.$tickboxes.on('change.pass-selector', this._handleTickboxChange.bind(this));
  }

  _handleTickboxChange(event) {
    const $currentTickbox = $(event.target);
    this.$tickboxes.not($currentTickbox).prop('checked', false);
    if (this.$tickboxes.filter(':checked').length === 0) {
      $currentTickbox.prop('checked', true);
    }
  }
}

export default PassSelector;
