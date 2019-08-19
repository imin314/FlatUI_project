class arrowButton {
  constructor(domElement) {
    this.domElement = domElement;
    this.initialize();
  }

  initialize() {
    $(document).ready(() => {
      const $button = $(this.domElement);

      $button.on('mousedown', e => e.preventDefault()).on('keydown', (e) => {
        if (e.which === 13) {
          $button.addClass('arrow-button_active');
        }
      }).on('keyup', (e) => {
        if (e.which === 13) {
          $button.removeClass('arrow-button_active').blur();
        }
      });
    });
  }
}

$('.arrow-button').each(function () {
  new arrowButton(this);
});
