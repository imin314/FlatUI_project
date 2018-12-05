import './asRange.js'
$(document).ready(function() {
	$('.slider_type_tooltip').asRange({
	tip: { 
		active: 'onMove',
	},
	step: 0.1
	}); 
	
	$('.slider_type_scale').asRange({
		tip: false,
		scale: {
    scale: {
      valuesNumber: 4,
      gap: 1,
      grid: 5
    }
  },
		step: 0.1
	});
});