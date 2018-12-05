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

	$(window).scroll(function(){
		var headerHeight = header.outerHeight();
		var passHeaderOffset = passHeader.offset().top
		if ($(this).scrollTop()+headerHeight > passHeaderOffset){
			header.css({"position" : "absolute", "top" : passHeaderOffset - headerHeight});
		}
		else
		{
			header.removeAttr("style");
		}
	});
});

