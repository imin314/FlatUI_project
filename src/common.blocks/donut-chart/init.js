import DonutChart from './DonutChart';

const initDonutCharts = function createInstances() {
  $('.js-donut-chart').each((i, element) => new DonutChart(element));
};

$(document).ready(initDonutCharts);
