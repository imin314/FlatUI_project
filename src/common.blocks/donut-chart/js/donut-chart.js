// Creates svg element, returned as jQuery object
function $s(elem) {
  return $(document.createElementNS('http://www.w3.org/2000/svg', elem));
}

$.fn.addDonutChart = function () {
	var el = $(this);
	var $svg = $s("svg").attr({width: '100%', height: '100%', viewBox: '-2 -2 35.830988618379 35.830988618379'});
	var $circle = $s("circle").attr({cx: 15.91549430918954, cy: 15.91549430918954, r: 15.91549430918954, fill: 'transparent', stroke: 'black'});
	$circle.attr("stroke-width",4);
	$svg.append($circle);
	el.append($svg);
};

$(document).ready(function() {
    $("#test").addDonutChart();
});
