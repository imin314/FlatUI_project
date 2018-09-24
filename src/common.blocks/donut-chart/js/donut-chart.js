// Creates svg element, returned as jQuery object
function $s(elem) {
  return $(document.createElementNS('http://www.w3.org/2000/svg', elem));
}

$.fn.addDonutChart = function () {
	var el = $(this);
	var $svg = $s("svg").attr({width: '100%', height: '100%', viewBox: '-2 -2 35.830988618379 35.830988618379'});
	var $circle = $s("circle").attr({cx: 15.91549430918954, cy: 15.91549430918954, r: 15.91549430918954, fill: 'transparent', stroke: '#e5e5e5'});
	$circle.attr("stroke-width",4);
	$svg.append($circle);
	
	var $segment1 = $s("circle").attr({cx: 15.91549430918954, cy: 15.91549430918954, r: 15.91549430918954, fill: 'transparent', stroke: '#747474'});
	$segment1.attr("stroke-width",4);
	$segment1.attr("stroke-dasharray", '12.5 87.5');
	$segment1.attr("stroke-dashoffset", 25);
	$svg.append($segment1);
	
	var $segment2 = $s("circle").attr({cx: 15.91549430918954, cy: 15.91549430918954, r: 15.91549430918954, fill: 'transparent', stroke: '#e75735'});
	$segment2.attr("stroke-width",4);
	$segment2.attr("stroke-dasharray", '25 75');
	$segment2.attr("stroke-dashoffset", 112.5); //100-12.5+25
	$svg.append($segment2);
	
	var $segment3 = $s("circle").attr({cx: 15.91549430918954, cy: 15.91549430918954, r: 15.91549430918954, fill: 'transparent', stroke: '#4eb7a8'});
	$segment3.attr("stroke-width",4);
	$segment3.attr("stroke-dasharray", '30 70');
	$segment3.attr("stroke-dashoffset", 87.5); //100-12.5-25+25
	$svg.append($segment3);
	
	el.append($svg);
};

$(document).ready(function() {
    $("#test").addDonutChart();
});
