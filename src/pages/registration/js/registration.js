import $ from 'jquery';

class Registration {
  constructor(domElement) {
    this._findElements(domElement);
    this._initialize();
  }

  _updateBreadCrumbs(itemNumber) {
    const activeClass = 'bread-crumbs__item_active';
    if (!this.$breadCrumbsItems.eq(itemNumber).hasClass(activeClass)) {
      this.$breadCrumbsItems.removeClass(activeClass);
      this.$breadCrumbsItems.eq(itemNumber).addClass(activeClass);
    }
  }

  _findElements(domElement) {
    const $domElement = $(domElement);
    this.$inputs = $domElement.find('input');
    this.$breadCrumbsItems = $domElement.find('.bread-crumbs__item');
    this.$formStages = $domElement.find('.registration-form__stage');
    this.$header = $domElement.find('.registration-page__header');
    this.$passHeader = $domElement.find('.pass-selector__title');
  }

  _initialize() {
    $(document).ready(() => {
      this.$inputs.on('change.registration', e => this._handleInputChange(e));
      $(window).on('scroll.registration', e => this._handleWindowScroll(e));
    });
  }

  _handleInputChange(event) {
    const $target = $(event.target);
    const $currentStage = $target.parents('.registration-form__stage');
    let stageNumber = 0;
    this.$formStages.each((i, element) => {
      if ($(element).is($currentStage)) {
        stageNumber = i;
      }
    });
    this._updateBreadCrumbs(stageNumber);
  }

  _handleWindowScroll(event) {
    const headerHeight = this.$header.outerHeight();
    const passHeaderOffset = this.$passHeader.offset().top;
    if ($(event.target).scrollTop() + headerHeight > passHeaderOffset) {
      this.$header.css({ position: 'absolute', top: passHeaderOffset - headerHeight });
    } else {
      this.$header.removeAttr('style');
    }
  }
}

$('.js-registration-page').each((i, element) => new Registration(element));
