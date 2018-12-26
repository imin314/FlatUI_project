import './dcalendar.picker.js';

class Calendar {
	constructor(domElement) {
		this.domElement = domElement;
		this.initialize();
	}

	initialize(){
		$(document).ready(() => {
			$(this.domElement).dcalendar();
		});
	}
}

$('.calendar').each(function(){
	new Calendar(this);
});