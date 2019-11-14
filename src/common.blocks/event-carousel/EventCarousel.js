import bind from 'bind-decorator';
import 'jquery-mousewheel';
import 'malihu-custom-scrollbar-plugin';

class EventCarousel {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    const $domElement = $(domElement);
    this.$cards = $domElement.find('.js-event-carousel__cards');
    this.$button = $domElement.find('.js-button');
    this.$calendarOverlay = $domElement.find('.js-event-carousel__calendar-overlay');
    this.$calendar = $domElement.find('.js-event-carousel__calendar');

    this.$cards
      .mCustomScrollbar({
        axis: 'x',
        theme: 'dark-thin',
        autoExpandScrollbar: true,
        advanced: {
          autoExpandHorizontalScroll: true,
          autoScrollOnFocuss: false,
        },
      });

    this.$button.on('click.event-carousel', this._handleButtonClick);
  }

  @bind
  _handleButtonClick() {
    this.$calendarOverlay.addClass('event-carousel__calendar-overlay_visible');
    $(document).on('click.event-carousel', this._handleDocumentClick);
  }

  @bind
  _handleDocumentClick(event) {
    if (event.target === this.$calendarOverlay[0]) {
      this.$calendarOverlay.removeClass('event-carousel__calendar-overlay_visible');
      $(document).off('click.event-carousel');
    }
  }
}

export default EventCarousel;
