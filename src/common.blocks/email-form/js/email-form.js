import 'jquery-validation';

class EmailForm {

	constructor(domElement) {
		this.domElement = domElement;
		this.namespace = this.domElement.className;
		this.initialize();
	}

	initialize() {
		$(document).ready(() => {
			var inputs = $(this.domElement).find('input[type=text],input[type=email]');
			var bubbleErrorClass = `${this.namespace}__bubble_type_error`;
			var bubbleGoodClass = `${this.namespace}__bubble_type_good`;
			$(this.domElement).validate({
				errorPlacement: function(error, element) {}
			});
			
			inputs.each(function () {
				var input = $(this);
				input.blur(function() {
					var bubble = input.parent().next();
					if(!input.valid()) {
						bubble.removeClass(bubbleGoodClass).addClass(bubbleErrorClass);
						bubble.text("Error");
					}
					else{
						bubble.removeClass(bubbleErrorClass).addClass(bubbleGoodClass);
						bubble.text("Thanks!");
					}
				});
		
				input.focus(function(){
					var bubble = input.parent().next();
					bubble.removeClass(bubbleGoodClass);
					bubble.removeClass(bubbleErrorClass);
				});
			});
		});
	}
}

$('.email-form').each(function() {
	new EmailForm(this);
});