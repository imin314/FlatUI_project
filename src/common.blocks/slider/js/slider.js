import './jquery-asRange.js'
	
$(document).ready(function() {
	$('.slider1').asRange({
	tip: { 
		active: 'onMove',
	},
	step: 0.1
	}); 
	$('.slider2').asRange({
		tip: false,
		scale: {
    scale: {
      valuesNumber: 4,
      gap: 1,
      grid: 5
    }
  },
		step: 1
	});
});