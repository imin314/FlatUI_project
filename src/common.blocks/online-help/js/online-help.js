import $ from 'jquery';

class OnlineHelp {
  constructor(domElement) {
    this.$domElement = $(domElement);
    this._initialize();
  }

  _initialize() {
    $(document).ready(() => {
      const $container = this.$domElement;
      const $button = $container.find('.js-online-help__button');
      this.$messenger = $container.find('.js-online-help__messenger');
      $button.click(() => this._handleButtonClick());
    });
  }

  _handleButtonClick() {
    this.$messenger.toggleClass('online-help__messenger_visible');
  }
}

$('.js-online-help').each((i, element) => new OnlineHelp(element));
