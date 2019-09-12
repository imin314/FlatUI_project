import $ from 'jquery';
import './asRange';

class Slider {
  constructor(domElement) {
    this.$domElement = $(domElement);
    this._initialize();
  }

  _initialize() {
    $(document).ready(() => {
      const $slider = this.$domElement;
      const settings = {
        tip: false,
        step: 0.1,
      };
      if ($slider.hasClass('js-slider_type_tooltip')) {
        settings.tip = { active: 'onMove' };
      }

      $slider.asRange(settings);
    });
  }
}

$('.js-slider').each((i, element) => new Slider(element));
