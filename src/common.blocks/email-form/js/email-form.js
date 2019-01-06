import ValidationForm from '../../validation-form/js/validation-form.js';

class EmailForm extends ValidationForm{

	constructor(domElement) {
		super(domElement);
		this.initialize();
	}
	
}

$('.email-form').each(function() {
	new EmailForm(this);
});