import 'jquery-validation';

export default class ValidationForm {

	constructor(domElement) {
		this.domElement = domElement;
		this.namespace = this.domElement.className;
	}

	initialize() {
		$(document).ready(() => {
			var inputs = $(this.domElement).find('input[type=text],input[type=email]');
			var bubbleErrorClass = `${this.namespace}__bubble_type_error`;
			var bubbleGoodClass = `${this.namespace}__bubble_type_good`;
			
			$(this.domElement).validate({
				errorPlacement: function (){},	
			});
			
			inputs.rules( "add", {
				required: true,
				minlength: 2,
				messages: {
					required: "",
					minlength: "",
					email: ""
				}
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