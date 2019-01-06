/*$(document).ready(function(){
	$('.drop-down__button, .drop-down__label').click(function () {
		var list = $(this).parent().siblings(".drop-down__list");
		list.toggleClass("drop-down__list_active");
	});

	$('.drop-down__item').click(function () {		
		var option = $(this).text();
		$(this).parent().removeClass("drop-down__list_active");
		$(this).parents(".drop-down").find(".drop-down__label").text(option);
	});
});*/

class DropDown {
	constructor(domElement) {
		this.domElement = domElement;
		this.namespace = this.domElement.className;
		this.initialize();
	}

	findChild(name) {
		var names = name.split(" ");
		var searchPattern = "." + this.namespace + "__" + names[0];
		for (let i = 1; i < names.length; i++) {
			searchPattern += ", ." + this.namespace + "__" + names[i];
		}
		return $(this.domElement).find(searchPattern);
	}

	initialize() {
		$(document).ready(() => {
			var list = this.findChild("list");
			var activeClass = this.namespace + "__list_active";
			var label = this.findChild("label");

			this.findChild("button label").click(function(){
				list.toggleClass(activeClass);
			});

			this.findChild("item").click(function(){
				var option = $(this).text();
				list.removeClass(activeClass);
				label.text(option);
			});
		});
	}
}

$('.drop-down').each(function() {
	new DropDown(this);
});