import './jquery.materialripple.js';

class Button {
	constructor(domElement){
		this.domElement = domElement;
		this.initialize();
	}

	initialize() {
		$(document).ready(() => {
			$(this.domElement).materialripple();
		});
	}
}

$('.ripple').each(function() {
	new Button(this);
});