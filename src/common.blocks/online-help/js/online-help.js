class OnlineHelp {
	constructor(domElement) {
		this.domElement = $(domElement);
		this.namespace = this.domElement[0].className;
		this.initialize();
	}

	initialize() {
		$(document).ready(() => {
			$(`.${this.namespace}__button`).click (() => {
				$(`.${this.namespace}__messenger`).toggleClass(`${this.namespace}__messenger_visible`);
			});
		});
	}
}

$(".online-help").each(function() {
	new OnlineHelp(this);
});