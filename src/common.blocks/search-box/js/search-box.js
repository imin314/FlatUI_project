class SearchBox {
	constructor(domElement) {
		this.domElement = $(domElement);
		this.namespace = this.domElement[0].className;
		this.initialize();
	}

	findChild(name) {
		return this.domElement.find(`.${this.namespace}__${name}`);
	}

	initialize() {
		$(document).ready(() => {
			var that = this;
			var inputFilledClass = `${that.namespace}__input-field_filled`;
			var notFoundMessage = "I've not found what I'm looking for...";

			that.findChild("input-field_filled").val(notFoundMessage);
		
			that.findChild("input-field").click(function(){
				$(this).val("");
				$(this).removeClass(inputFilledClass);
			});
		
			that.findChild("button").click(function(){
				var input = that.findChild("input-field");
				input.val(notFoundMessage);
				input.addClass(inputFilledClass);
			});
		});
	}
}

$(".search-box").each(function() {
	new SearchBox(this);
});