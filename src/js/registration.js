$.fn.updateBreadCrumbs = function (itemNumber) {
	if (!this.eq(itemNumber).hasClass("bread-crumbs__item_active")) {
		this.removeClass("bread-crumbs__item_active");
		this.eq(itemNumber).addClass("bread-crumbs__item_active");
	}
}

$(document).ready(function(){
	$("#registration-form1").addRegistrationForm();
	var stages = $(".bread-crumbs__item");
	
	$(".registration-form__first-stage").focusin(function(){
		stages.updateBreadCrumbs(0);
	});
	$(".registration-form__first-stage input[type=checkbox]").change(function(){
		stages.updateBreadCrumbs(0);
	});

	$(".registration-form__pass-selector input[type=checkbox]").change(function(){
		stages.updateBreadCrumbs(1);
	});

	$(".registration-form__last-stage input[type=checkbox]").change(function(){
		stages.updateBreadCrumbs(2);
	});
	$(".registration-form__last-stage input[type=submit]").click(function(){
		stages.updateBreadCrumbs(2);
	});

	var header = $(".registration-page__header");
	var passHeader = $(".pass-selector__header");
	var passName = $(".pass-selector__pass-name");
	$(window).scroll(function(){
		console.log(header[0].getBoundingClientRect().bottom + " " + passHeader[0].getBoundingClientRect().bottom);
		if (header[0].getBoundingClientRect().bottom > passHeader[0].getBoundingClientRect().bottom){
			header.css({"position" : "absolute", "top" : passName.offset().top - header.height() - 20});
		}
		else{
			header.removeAttr("style");
		}
	});
});

