class EventCarousel {
  constructor(domElement) {
    this.$cards = $(domElement).find('.js-event-carousel__cards');
    this.$calendarOverlay = $(domElement).find('.js-event-carousel__calendar-overlay');
    this._initialize();
  }

  _initialize() {
    this.$cards
      .on('click.event-carousel', (event) => this._handleButtonClick(event))
      .mCustomScrollbar({
        axis: 'x',
        theme: 'dark-thin',
        autoExpandScrollbar: true,
        advanced: { 
          autoExpandHorizontalScroll: true,
          autoScrollOnFocus: false,
        },
	    });
  }

  _handleButtonClick(event) {
    const $target = $(event.target);
    if ($target.hasClass('js-button')) {
      this.$calendarOverlay.addClass('event-carousel__calendar-overlay_visible');
      $(document).on('click.event-carousel', (event) => this._handleDocumentClick(event));
      return false;
    }
  }

  _handleDocumentClick(event) {
    if ($(event.target).closest('.js-event-carousel__calendar').length === 0) {
      this.$calendarOverlay.removeClass('event-carousel__calendar-overlay_visible');
      $(document).off('click.event-carousel');
      return false;
    }
  }
}

$('.js-event-carousel').each((i, element) => new EventCarousel(element));