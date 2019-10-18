class DonutChart {
  constructor(domElement) {
    this.$domElement = $(domElement);
    this._initialize();
  }

  _initialize() {
    this.values = this._getValues();

    this._initDonutCircle();
    this._drawSegments();

    this.$domElement.append(this.$svg);
    this._setViewBox();
  }

  _getValues() {
    const values = this.$domElement.data('values');
    if (typeof values === 'number') return [values];
    return values.split(/,\s*/);
  }

  _initDonutCircle() {
    this.$svg = DonutChart.$s('svg').attr({ class: 'donut-chart__chart-container' });
    this.$ring = DonutChart.$createSVGCircle({ class: 'donut-chart__ring' });
    this.$svg.append(this.$ring);
  }

  _drawSegments() {
    let offset = 0;
    this.values.forEach((value, i) => {
      const $segment = DonutChart.$createSVGSegment({ value, i, offset });
      this.$svg.append($segment);
      offset += Number(value);
    });
  }

  _setViewBox() {
    const strokeWidth = parseFloat(this.$ring.css('stroke-width'));
    const viewBoxTop = 0 - (strokeWidth / 2);
    const viewBoxBottom = DonutChart.radius * 2 + strokeWidth;
    const viewBoxValue = `${viewBoxTop} ${viewBoxTop} ${viewBoxBottom} ${viewBoxBottom}`;
    this.$svg.attr({ viewBox: viewBoxValue });
  }

  // creates svg element, returned as jQuery object
  static $s(elem) {
    return $(document.createElementNS('http://www.w3.org/2000/svg', elem));
  }

  static get radius() {
    // radius = C/(2*pi), where C is circle length assumed to equal 100
    return 15.91549430918954;
  }

  static $createSVGCircle(attributes) {
    const defaultAttributes = {
      cx: DonutChart.radius,
      cy: DonutChart.radius,
      r: DonutChart.radius,
    };
    return DonutChart.$s('circle').attr({ ...defaultAttributes, ...attributes });
  }

  static $createSVGSegment(data) {
    /**
     * dashoffsetInitial rotates offset 25% counter clockwise,
     * because stroke-dasharray starts not at top (12:00), but at right (3:00)
     */
    const { value, i, offset } = data;
    const dashoffsetInitial = 25;
    const dashoffset = i === 0 ? dashoffsetInitial : (100 - offset + dashoffsetInitial);
    const $segment = DonutChart.$createSVGCircle({ class: 'donut-chart__segment' });

    $segment.attr('stroke-dasharray', `${value} ${100 - value}`);
    $segment.attr('stroke-dashoffset', dashoffset);

    return $segment;
  }
}

export default DonutChart;
