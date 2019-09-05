import 'jquery-validation';

export default class ValidationForm {
  constructor(domElement) {
    this.domElement = domElement;
    this.namespace = this.domElement.className;
  }

  initialize() {
    $(document).ready(() => {
      let inputs = $(this.domElement).find('input[type=text],input[type=email]');
      let bubbleErrorClass = `${this.namespace}__bubble_type_error`;
      let bubbleGoodClass = `${this.namespace}__bubble_type_good`;

      $(this.domElement).validate({
        errorPlacement (){},
      });

      inputs.rules('add', {
        required: true,
        minlength: 2,
        messages: {
          required: '',
          minlength: '',
          email: '',
        },
      });

      inputs.each(function () {
        let input = $(this);
        input.blur(() => {
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

        input.focus(() => {
					var bubble = input.parent().next();
					bubble.removeClass(bubbleGoodClass);
					bubble.removeClass(bubbleErrorClass);
				});
      });
    });
  }
}
