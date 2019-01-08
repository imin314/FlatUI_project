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
