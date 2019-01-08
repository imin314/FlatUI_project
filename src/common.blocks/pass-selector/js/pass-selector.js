class PassSelector {
	constructor(domElement) {
		this.domElement = $(domElement);
		this.namespace = this.domElement[0].className.split(" ")[0];
		this.initialize();
	}

	initialize() {
		$(document).ready(() => {
			var that = this;
			var tickbox = $(`.${that.namespace}__tickbox input[type=checkbox]`);
			tickbox.on('change', function() {
				tickbox.not(this).prop('checked', false);
				if ($(`.${that.namespace}__tickbox input[type=checkbox]:checked`).length > 0) {
					$(this).prop('checked', true);
				}
			});
		});
	}
}

$(".pass-selector").each(function() {
	new PassSelector(this);
});