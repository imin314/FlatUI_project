import '../../scrollbar/js/scrollbar';

class EventCarousel {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    const $domElement = $(domElement);
    this.$cards = $domElement.find('.js-event-carousel__cards');
    this.$calendarOverlay = $domElement.find('.js-event-carousel__calendar-overlay');
    this.$calendar = $domElement.find('.js-event-carousel__calendar');

    this.$cards
      .on('click.event-carousel', event => this._handleButtonClick(event))
      .mCustomScrollbar({
        axis: 'x',
        theme: 'dark-thin',
        autoExpandScrollbar: true,
        advanced: {
          autoExpandHorizontalScroll: true,
          autoScrollOnFocuss: false,
        },
      });
  }

  _handleButtonClick(event) {
    const $target = $(event.target);
    if ($target.hasClass('js-button')) {
      this.$calendarOverlay.addClass('event-carousel__calendar-overlay_visible');
      $(document).on('click.event-carousel', e => this._handleDocumentClick(e));
      return false;
    }
  }

  _handleDocumentClick(event) {
    if (event.target === this.$calendarOverlay[0]) {
      this.$calendarOverlay.removeClass('event-carousel__calendar-overlay_visible');
      $(document).off('click.event-carousel');
      return false;
    }
  }
}

export default EventCarousel;
