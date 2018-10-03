/**
 * Updates the donut chart's percent number and the CSS positioning of the progress bar.
 */
$.fn.updateDonutChart = function () {
	var el = $(this);
	var percent = parseInt(el.find('.label').text());
	
    if (percent > 100) {
        percent = 100;
    } else if (percent < 0) {
        percent = 0;
    }
    var deg = Math.round(360 * (percent / 100));
    if (percent > 50) {
    	el.find('.pie').css('clip', 'rect(auto, auto, auto, auto)');
    	el.find('.right-side').css('transform', 'rotate(180deg)');
    }
    el.find('.left-side').css('transform', 'rotate(' + deg + 'deg)');
};
