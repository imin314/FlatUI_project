$(document).ready(function(){
	$('.drop-down__button, .drop-down__label').click(function () {
		var list = $(this).parent().siblings(".drop-down__list");
		list.toggleClass("drop-down__list_active");
	});

	$('.drop-down__item').click(function () {		
		var option = $(this).text();
		$(this).parent().removeClass("drop-down__list_active");
		$(this).parents(".drop-down").find(".drop-down__label").text(option);
	});
});