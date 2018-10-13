$(document).ready(function(){
	var inputFilled = $(".search-box__input-field_filled");
	inputFilled.val('I\'ve not found what I\'m looking for...');

	$(".search-box__input-field").click(function(){
		$(this).val('');
		$(this).removeClass('search-box__input-field_filled');
	});

	$(".search-box__button").click(function(){
		var input = $(this).parent().find(".search-box__input-field");
		input.val('I\'ve not found what I\'m looking for...');
		input.addClass("search-box__input-field_filled");
	});
});