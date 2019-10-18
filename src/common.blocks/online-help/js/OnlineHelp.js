class OnlineHelp {
  constructor(domElement) {
    this.$domElement = $(domElement);
    this._initialize();
  }

  _initialize() {
    const $container = this.$domElement;
    const $button = $container.find('.js-online-help__button');
    this.$messenger = $container.find('.js-online-help__messenger');
    $button.on('click.messenger', this._handleButtonClick.bind(this));
  }

  _handleButtonClick() {
    this.$messenger.toggleClass('online-help__messenger_visible');
  }
}

export default OnlineHelp;
