import ValidationForm from '../../validation-form/js/validation-form.js';

class RegistrationForm extends ValidationForm {
	constructor(domElement) {
		super(domElement);
		this.namespace = this.domElement.className.split("__")[0];
		this.initialize();
	}
}

$('.registration-form__form').each(function() {
	new RegistrationForm(this);
});
/*import 'jquery-validation';



$('.registration-form').each(function() {
	new EmailForm(this);
});
/*
$.fn.addRegistrationForm = function () {
	var form = $(this);
	var inputs = form.find('input[type=text],input[type=email]');
	
	form.validate({
    	errorPlacement: function(error, element) {
    	}
    });
    
	inputs.each(function () {
		var input = $(this);
		input.blur(function() {
			var bubble = input.parent().next();
			if(!input.valid()) {
				bubble.removeClass("registration-form__bubble_type_good").addClass("registration-form__bubble_type_error");
				bubble.text("Error");
			}
			else{
				bubble.removeClass("registration-form__bubble_type_error").addClass("registration-form__bubble_type_good");
				bubble.text("Thanks!");
			}
		});

		input.focus(function(){
			var bubble = input.parent().next();
			bubble.removeClass("registration-form__bubble_type_good");
			bubble.removeClass("registration-form__bubble_type_error");
		});
	});
};

/*
$.fn.checkValidity = function () {
	
	/*
	form.submit(function (event) {
		
	});
};*/
