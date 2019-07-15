class SpeakerCard {
	constructor(domElement) {
		this.domElement = $(domElement);
		this.namespace = this.domElement[0].className;
		this.initialize();
	}

	findChild(name) {
		return this.domElement.find(`.${this.namespace}__${name}`);
	}

	addScrollBar(){
		this.findChild("text").mCustomScrollbar();
	}

	initialize() {
		var that = this;
		$(window).on("load", function(){
			that.addScrollBar();
		});
	}
}

$(".speaker-card").each(function() {
	new SpeakerCard(this);
});