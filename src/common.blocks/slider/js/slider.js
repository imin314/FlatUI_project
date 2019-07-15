import './asRange.js'

class Slider {
	constructor(domElement) {
		this.domElement = $(domElement);
		this.namespace = this.domElement[0].className.split(" ")[0];
		this.initialize();
	}

	initialize() {
		$(document).ready(() => {
			$(`.${this.namespace}_type_tooltip`).asRange({
				tip: { 
					active: 'onMove',
				},
				step: 0.1
			}); 
				
			$(`.${this.namespace}_type_scale`).asRange({
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
	}

}

$(".slider").each(function() {
	new Slider(this);
});