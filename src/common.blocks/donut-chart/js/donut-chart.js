import $ from 'jquery';

class DonutChart {
  constructor(domElement) {
    this.domElement = domElement;
    this.values = this._getValues();
    this.colors = this._getColors();
    this._initialize();
  }

  _getValues() {
    const values = $(this.domElement).data('values');
    if (typeof values === 'number') return [values];
    return values.split(',');
  }

  _getColors() {
    return $(this.domElement).data('colors').split(',');
  }

  _initialize() {
    $(document).ready(() => this._drawDonut());
  }

  _drawDonut() {
    const radius = 15.91549430918954;
    const $donut = $(this.domElement);
    const values = this.values;
    const colors = this.colors;

    let backgroundColor = '#e5e5e5';
    if (values[0] === 0 && values.length === 1) {
      backgroundColor = 'transparent';
    }

    const $svg = DonutChart.$s('svg').attr({ width: '100%', height: '100%' });
    const $circle = DonutChart.$s('circle').attr({
      cx: radius, cy: radius, r: radius, fill: 'transparent', stroke: backgroundColor,
    });
    $svg.append($circle);

    let offset = 0;
    const dashoffset0 = 25;

    values.forEach((value, i) => {
      const $segment = DonutChart.$s('circle').attr({
        cx: radius, cy: radius, r: radius, fill: 'transparent', stroke: colors[i],
      });
      const dashoffset = 100 - offset + dashoffset0;

      $segment.attr('stroke-dasharray', `${value} ${100 - value}`);
      if (i === 0) {
        $segment.attr('stroke-dashoffset', dashoffset0);
      } else {
        $segment.attr('stroke-dashoffset', dashoffset);
      }
      $svg.append($segment);
      offset += Number(value);
    });

    $donut.append($svg);

    const strokeWidth = parseFloat($donut.find('circle').css('stroke-width'));
    const viewBoxTop = 0 - (strokeWidth / 2);
    const viewBoxBottom = radius * 2 + strokeWidth;
    const viewBoxValue = `${viewBoxTop} ${viewBoxTop} ${viewBoxBottom} ${viewBoxBottom}`;
    $svg.attr({ viewBox: viewBoxValue });

    const $label = $donut.find('.donut-chart__label');
    if ($label.length > 0) {
      $label.text(values[0]);
    }
  }

  // creates svg element, returned as jQuery object
  static $s(elem) {
    return $(document.createElementNS('http://www.w3.org/2000/svg', elem));
  }
}

$('.donut-chart').each((i, element) => new DonutChart(element));
