/*var form = document.querySelector('.email-form');
var email = document.getElementById('email');
var bubble = document.querySelector('.email-form__bubble');


email.addEventListener("blur", function (event) {
  if (!email.validity.valid) {
	bubble.classList.remove("email-form__bubble_good");
    bubble.classList.add("email-form__bubble_error");
    bubble.innerHTML = "Error";
    console.log('ERROR');
  }
  else {
    bubble.classList.remove("email-form__bubble_error");
	bubble.classList.add("email-form__bubble_good");
	bubble.innerHTML = "Thanks!";
	console.log('NO ERROR');
  }
}, false);

form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    event.preventDefault();
  }
}, false);*/
import 'jquery-validation';

$.fn.addEmailForm = function () {
	var form = $(this);
	var inputs = form.find('input[type=text],input[type=email]');
	
	form.validate({
    	errorPlacement: function(error, element) {
    	}
    });
    
	inputs.each(function () {
		var input = $(this);
		input.blur(function() {
			var bubble = input.next();
			console.log(bubble);
			if(!input.valid()) {
				bubble.removeClass("email-form__bubble_good").addClass("email-form__bubble_error");
				bubble.text("Error");
			}
			else{
				bubble.removeClass("email-form__bubble_error").addClass("email-form__bubble_good");
				bubble.text("Thanks!");
			}
		});
	});
    
};

/*
$.fn.checkValidity = function () {
	
	/*
	form.submit(function (event) {
		
	});
};*/