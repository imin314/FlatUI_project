class RegistrationPage {
	constructor(domElement) {
		this.domElement = $(domElement);
		this.stages = this.domElement.find(".bread-crumbs__item");
		this.activeClass = "bread-crumbs__item_active";
		this.initialize();
	}

	updateBreadCrumbs(itemNumber) {
		if (!this.stages.eq(itemNumber).hasClass(this.activeClass)) {
			this.stages.removeClass(this.activeClass);
			this.stages.eq(itemNumber).addClass(this.activeClass);
		}
	}

	initialize(){
		var that = this;
		$(document).ready(() => {
			that.domElement.find(".registration-form__first-stage").focusin(function(){
				that.updateBreadCrumbs(0);
			});
			that.domElement.find(".registration-form__first-stage input[type=checkbox]").change(function(){
				that.updateBreadCrumbs(0);
			});
			that.domElement.find(".registration-form__pass-selector input[type=checkbox]").change(function(){
				that.updateBreadCrumbs(1);
			});
			that.domElement.find(".registration-form__last-stage input[type=checkbox]").change(function(){
				that.updateBreadCrumbs(2);
			});
			that.domElement.find(".registration-form__last-stage input[type=submit]").change(function(){
				that.updateBreadCrumbs(2);
			});

			var header = that.domElement.find(".registration-page__header");
			var passHeader = that.domElement.find(".pass-selector__header");
		
			$(window).scroll(function(){
				var headerHeight = header.outerHeight();
				var passHeaderOffset = passHeader.offset().top;
				if ($(this).scrollTop() + headerHeight > passHeaderOffset){
					header.css({"position" : "absolute", "top" : passHeaderOffset - headerHeight});
				}
				else
				{
					header.removeAttr("style");
				}
			});
		});
	}
}

$(".registration-page").each(function() {
	new RegistrationPage(this);
});