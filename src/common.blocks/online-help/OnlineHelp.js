import bind from 'bind-decorator';

class OnlineHelp {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    const $container = $(domElement);
    const $button = $container.find('.js-online-help__button');
    this.$messenger = $container.find('.js-online-help__messenger');
    $button.on('click.messenger', this._handleButtonClick);
  }

  @bind
  _handleButtonClick() {
    this.$messenger.toggleClass('online-help__messenger_visible');
  }
}

export default OnlineHelp;
