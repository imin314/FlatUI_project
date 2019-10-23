import bind from 'bind-decorator';
import 'jquery-mousewheel';
import 'malihu-custom-scrollbar-plugin';

class SpeakerCarousel {
  constructor(domElement) {
    this.cardsAreExpanded = false;
    this._initialize(domElement);
  }

  _findElements(domElement) {
    const $domElement = $(domElement);
    this.$page = $domElement;
    this.$cards = $domElement.find('.js-speaker-carousel__cards');
    this.$rightButton = $domElement.find('.js-speaker-carousel__arrow-button .js-arrow-button_direction_right');
    this.$leftButton = $domElement.find('.js-speaker-carousel__arrow-button .js-arrow-button_direction_left');
    this.$viewAllLink = $domElement.find('.js-speaker-carousel__link');
  }

  _initialize(domElement) {
    this._findElements(domElement);
    this._addCustomScrollBar();
    this.$scrollBarContainer = this.$cards.find('.mCSB_container');
    this.windowIsSmall = false;

    const mediaQuery = window.matchMedia('(max-width: 500px)');
    mediaQuery.addListener(this._updatePageView);

    this._updatePageView(mediaQuery);
    this._addEventListeners();
  }

  _addCustomScrollBar() {
    const scrollBarSettings = {
      axis: 'x',
      theme: 'dark-thin',
      autoExpandScrollbar: true,
      advanced: {
        autoExpandHorizontalScroll: true,
      },
      callbacks: {
        onTotalScroll: this.handleScrollbarTotalScroll,
        onTotalScrollBack: this.handleScrollbarTotalScrollBack,
        onScrollStart: this.handleScrollbarScrollStart,
      },
    };

    this.$cards.mCustomScrollbar(scrollBarSettings);
  }

  @bind
  handleScrollbarTotalScroll() {
    this.$rightButton
      .addClass('arrow-button_disabled')
      .attr('tabindex', '-1');
  }

  @bind
  handleScrollbarTotalScrollBack() {
    this.$leftButton
      .addClass('arrow-button_disabled')
      .attr('tabindex', '-1');
  }

  @bind
  handleScrollbarScrollStart() {
    this.$leftButton
      .removeClass('arrow-button_disabled')
      .attr('tabindex', '0');
    this.$rightButton
      .removeClass('arrow-button_disabled')
      .attr('tabindex', '0');
  }

  @bind
  _updatePageView(mediaQuery) {
    if (mediaQuery.matches) {
      this.windowIsSmall = true;
      this.$page.addClass('speaker-carousel_view_small');
      this._hideCustomScrollBar();
    } else {
      this.windowIsSmall = false;
      this.$page.removeClass('speaker-carousel_view_small');
      if (!this.cardsAreExpanded) {
        this._updateCustomScrollBar();
      }
    }
  }

  _addEventListeners() {
    this.$rightButton.on('click.speakers', this._handleRightButtonClick);
    this.$leftButton.on('click.speakers', this._handleLeftButtonClick);
    this.$viewAllLink.on('click.speakers', this._handleViewAllLinkClick);
  }

  @bind
  _handleRightButtonClick() {
    this.$cards.mCustomScrollbar('scrollTo', '-=500');
  }

  @bind
  _handleLeftButtonClick() {
    this.$cards.mCustomScrollbar('scrollTo', '+=500');
  }

  @bind
  _handleViewAllLinkClick() {
    if (this.cardsAreExpanded) {
      this.$page.removeClass('speaker-carousel_view_full');
      this.$viewAllLink.text('View all speakers');
      this.cardsAreExpanded = false;
      if (!this.windowIsSmall) {
        this._updateCustomScrollBar();
      }
    } else {
      this.$page.addClass('speaker-carousel_view_full');
      this.$viewAllLink.text('Back to compact view');
      this.cardsAreExpanded = true;
      if (!this.windowIsSmall) {
        this._hideCustomScrollBar();
      }
    }
  }

  _updateCustomScrollBar() {
    this.$cards.mCustomScrollbar('update');
    this.$scrollBarContainer.css('position', 'relative');
  }

  _hideCustomScrollBar() {
    this.$cards.mCustomScrollbar('disable', true);
    this.$scrollBarContainer.removeAttr('style');
  }
}

export default SpeakerCarousel;
