import bind from 'bind-decorator';
import 'jquery-validation';

class RegistrationForm {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    this._findElements(domElement);
    this._addFormValidation();

    this.$inputs.on('change.registration-form', this._handleInputChange);
    $(window).on('scroll.registration-form', this._handleWindowScroll);
    this.$registerButton.on('click.registration-form', this._handleRegisterButtonClick);
  }

  _findElements(domElement) {
    const $domElement = $(domElement);
    this.$inputs = $domElement.find('input');
    this.$form = $domElement.find('.js-registration-form__form');
    this.$breadCrumbsItems = $domElement.find('.js-bread-crumbs__item');
    this.$formStages = $domElement.find('.js-registration-form__stage');
    this.$header = $domElement.find('.js-registration-form__header');
    this.$passHeader = $domElement.find('.js-pass-selector__title');
    this.$registerButton = $domElement.find('.js-registration-form__button');
  }

  _addFormValidation() {
    this.$form.validate({
      rules: {
        name: 'required',
        email: {
          required: true,
          email: true,
        },
        policy: 'required',
      },
      focusInvalid: true,
      errorPlacement() {},
    });
  }

  _updateBreadCrumbs(itemNumber) {
    const activeClass = 'bread-crumbs__item_active';
    if (!this.$breadCrumbsItems.eq(itemNumber).hasClass(activeClass)) {
      this.$breadCrumbsItems.removeClass(activeClass);
      this.$breadCrumbsItems.eq(itemNumber).addClass(activeClass);
    }
  }

  @bind
  _handleInputChange(event) {
    const $target = $(event.target);
    const $currentStage = $target.parents('.js-registration-form__stage');
    let stageNumber = 0;
    this.$formStages.each((i, element) => {
      if ($(element).is($currentStage)) {
        stageNumber = i;
      }
    });
    this._updateBreadCrumbs(stageNumber);
  }

  @bind
  _handleWindowScroll(event) {
    const headerHeight = this.$header.outerHeight();
    const passHeaderOffset = this.$passHeader.offset().top;
    if ($(event.target).scrollTop() + headerHeight > passHeaderOffset) {
      this.$header.css({ position: 'absolute', top: passHeaderOffset - headerHeight });
    } else {
      this.$header.removeAttr('style');
    }
  }

  @bind
  _handleRegisterButtonClick() {
    this.$form.submit();
  }
}

export default RegistrationForm;
