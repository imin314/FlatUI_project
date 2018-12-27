class DonutChart{
	constructor(domElement){
		this.domElement = domElement;
		this.values = this.getValues();
		this.colors = this.getColors();
		this.initialize();
	}
	
	initialize(){
		$(document).ready(() => {
			this.drawDonut();
		});
	}

	// Creates svg element, returned as jQuery object
	static $s(elem){
		return $(document.createElementNS('http://www.w3.org/2000/svg', elem));
	}

	getValues(){
		var values = $(this.domElement).data("values");
		if (typeof values == 'number') return [values];

		return values.split(",");
	}

	getColors(){
		return $(this.domElement).data("colors").split(",");
	}

	drawDonut(){
		var el = $(this.domElement);
		var radius = 15.91549430918954;
		var backgroundColor = '#e5e5e5';
		var data = this.values;
		var colors = this.colors;
		if (data[0] === 0 && data.length === 1) {
			backgroundColor = 'transparent';
		}
		var $svg = DonutChart.$s("svg").attr({width: '100%', height: '100%'});
		var $circle = DonutChart.$s("circle").attr({cx: radius, cy: radius, r: radius, fill: 'transparent', stroke: backgroundColor});
		//$circle.attr("stroke-width",4);
		$svg.append($circle);
		
		var offset = 0;
		var dashoffset0 = 25;
		debugger;
		for (var i=0; i< data.length; i++){
			var $segment = DonutChart.$s("circle").attr({cx: radius, cy: radius, r: radius, fill: 'transparent', stroke: colors[i]});
			//$segment.attr("stroke-width",4);
			var dashoffset = 100 - offset + dashoffset0;
			$segment.attr("stroke-dasharray", data[i]+' '+(100-data[i]));
			if (i === 0){
			$segment.attr("stroke-dashoffset", dashoffset0);
		}
		else{
			$segment.attr("stroke-dashoffset", dashoffset);
		}
			$svg.append($segment);
			offset += +data[i];
		}
		el.append($svg);
		var strokeWidth = parseFloat(el.find("circle").css("stroke-width"));
		var viewBoxTop = 0 - (strokeWidth/2);
		var viewBoxBottom = radius * 2 + strokeWidth;
		var viewBoxValue = viewBoxTop + ' ' + viewBoxTop + ' ' + viewBoxBottom + ' ' + viewBoxBottom;
		//$svg.setAttribute("viewBox",);
		$svg.attr({viewBox: viewBoxValue});
		if (el.has(".donut-chart__label")){
			el.find(".donut-chart__label").text(data[0]);
		}
	}
}

$('.donut-chart').each(function() {
	new DonutChart(this);
});
/*
// var data = [12.5,25,30]
// var colors = ['#747474','#e75735','#4eb7a8']
$.fn.addDonutChart = function (data, colors) {
	
	
};*/
