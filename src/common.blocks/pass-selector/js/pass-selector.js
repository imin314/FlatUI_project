class PassSelector {
  constructor(domElement) {
    this.$domElement = $(domElement);
    this._initialize();
  }

  _initialize() {
    $(document).ready(() => {
      this.$tickboxes = this.$domElement.find('input[type=checkbox]');
      this.$tickboxes.on('change.pass-selector', e => this._handleTickboxChange(e));
    });
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
