import 'jquery-ui/ui/widgets/slider';
import bind from 'bind-decorator';

require('jquery-ui-touch-punch');

class Slider {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    this._findElements(domElement);
    const settings = this._generateSliderSettings();
    this.$sliderContainer.slider(settings);

    const currentValue = this.$sliderContainer.slider('option', 'value');
    this._updateTip(currentValue);
  }

  _findElements(domElement) {
    this.$slider = $(domElement);
    this.$sliderContainer = this.$slider.find('.js-slider__container');
    this.$tip = this.$slider.find('.js-slider__tip');
    return this;
  }

  _generateSliderSettings() {
    let typeSettings = {};
    const settings = {
      min: 0,
      max: 100,
      classes: {
        'ui-slider': 'slider__container',
        'ui-slider-handle': 'slider__handle',
        'ui-slider-range': 'slider__range',
      },
    };
    if (this.$slider.hasClass('js-slider_type_tip')) {
      typeSettings = {
        value: 40,
        slide: this._handleSliderSlide,
        start: this._handleSliderStart,
        stop: this._handleSliderStop,
      };
    } else if (this.$slider.hasClass('js-slider_type_scale')) {
      typeSettings = {
        value: 75,
        step: 25,
        range: 'min',
      };
    }

    return { ...settings, ...typeSettings };
  }

  @bind
  _handleSliderSlide(event, ui) {
    this._updateTip(ui.value);
  }

  @bind
  _handleSliderStart() {
    this.$tip.addClass('slider__tip_visible');
  }

  @bind
  _handleSliderStop() {
    this.$tip.removeClass('slider__tip_visible');
  }

  _updateTip(value) {
    this.$tip
      .text(value)
      .css('left', `${value}%`);
  }
}

export default Slider;
