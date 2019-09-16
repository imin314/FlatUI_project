import $ from 'jquery';

class Speakers {
  constructor(domElement) {
    this.cardsAreExpanded = false;
    this._findElements(domElement);
    this._initialize();
  }

  _findElements(domElement) {
    const $domElement = $(domElement);
    this.$page = $domElement;
    this.$cards = $domElement.find('.js-speakers__cards');
    this.$rightButton = $domElement.find('.js-speakers__right-button .js-arrow-button');
    this.$leftButton = $domElement.find('.js-speakers__left-button .js-arrow-button');
    this.$viewAllLink = $domElement.find('.js-speakers__link');
  }

  _initialize() {
    $(document).ready(() => {
      this._addCustomScrollBar();
      this.$scrollBarContainer = this.$cards.find('.mCSB_container');
      this.windowIsSmall = false;

      const mediaQuery = window.matchMedia('(max-width: 500px)');
      const handleWidthChange = this._updatePageView.bind(this);
      mediaQuery.addListener(handleWidthChange);

      this._updatePageView(mediaQuery);
      this._addEventListeners();
    });
  }

  _addCustomScrollBar() {
    const onTotalScroll = this._handleTotalScroll.bind(this);
    const onTotalScrollBack = this._handleTotalScrollBack.bind(this);
    const onScrollStart = this._handleScrollStart.bind(this);

    const scrollBarSettings = {
      axis: 'x',
      theme: 'dark-thin',
      autoExpandScrollbar: true,
      advanced: {
        autoExpandHorizontalScroll: true,
      },
      callbacks: {
        onTotalScroll,
        onTotalScrollBack,
        onScrollStart,
      },
    };

    this.$cards.mCustomScrollbar(scrollBarSettings);
  }

  _handleTotalScroll() {
    this.$rightButton.addClass('arrow-button_disabled');
  }

  _handleTotalScrollBack() {
    this.$leftButton.addClass('arrow-button_disabled');
  }

  _handleScrollStart() {
    this.$leftButton.removeClass('arrow-button_disabled');
    this.$rightButton.removeClass('arrow-button_disabled');
  }

  _updatePageView(mediaQuery) {
    if (mediaQuery.matches) {
      this.windowIsSmall = true;
      this.$page.addClass('speakers_view_small');
      this._hideCustomScrollBar();
    } else {
      this.windowIsSmall = false;
      this.$page.removeClass('speakers_view_small');
      if (!this.cardsAreExpanded) {
        this._updateCustomScrollBar();
      }
    }
  }

  _addEventListeners() {
    this.$rightButton.on('click.speakers', () => this._handleRightButtonClick());
    this.$leftButton.on('click.speakers', () => this._handleLeftButtonClick());
    this.$viewAllLink.on('click.speakers', () => this._handleViewAllClick());
  }

  _handleRightButtonClick() {
    this.$cards.mCustomScrollbar('scrollTo', '-=500');
  }

  _handleLeftButtonClick() {
    this.$cards.mCustomScrollbar('scrollTo', '+=500');
  }

  _handleViewAllClick() {
    if (this.cardsAreExpanded) {
      this.$page.removeClass('speakers_view_full');
      this.$viewAllLink.text('View all speakers');
      this.cardsAreExpanded = false;
      if (!this.windowIsSmall) {
        this._updateCustomScrollBar();
      }
    } else {
      this.$page.addClass('speakers_view_full');
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

$('.js-speakers').each((i, element) => new Speakers(element));
