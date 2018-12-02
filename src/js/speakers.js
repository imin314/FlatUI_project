    $(window).on("load resize",function(){
        if(window.matchMedia("(min-width: 479px)").matches){
			$(".speakers-page__cards").mCustomScrollbar(
				{
					axis:"x",
					theme:"dark-thin",
					autoExpandScrollbar:true,
					advanced:{autoExpandHorizontalScroll:true},
					callbacks:{
						onTotalScroll: function(){
							$(".speakers-page__right-button").find(".arrow-button").addClass("arrow-button_disabled");
						},
						onTotalScrollBack: function(){
							$(".speakers-page__left-button").find(".arrow-button").addClass("arrow-button_disabled");
						},
						onScrollStart: function(){
							$(".speakers-page__left-button").find(".arrow-button").removeClass("arrow-button_disabled");
							$(".speakers-page__right-button").find(".arrow-button").removeClass("arrow-button_disabled");
						}
					}
				});
        }else{
			$(".speakers-page__cards").mCustomScrollbar("destroy");
        }
    });

$(document).ready(function() {
	var speakerPage = $(".speakers-page");
	var cards = $(".speakers-page__cards");
	var isFullView = false;
	var isSmall = false;
	if (matchMedia) {
		const mq = window.matchMedia("(max-width: 478px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}
	
	// media query change
	function WidthChange(mq) {
		if (mq.matches) {
				isSmall = true;
				speakerPage.addClass('speakers-page__view_small');
			} else {
				isSmall = false;
				speakerPage.removeClass('speakers-page__view_small');
			}
	}
    $(".speakers-page__right-button").click(function(){
		cards.mCustomScrollbar("scrollTo","-=500");
	});

	$(".speakers-page__left-button").click(function(){
		cards.mCustomScrollbar("scrollTo","+=500");
	});

	$(".speakers-page__link").click(function(){
	
		if (!isFullView) {
			speakerPage.addClass("speakers-page__view_full");
			$(".speakers-page__link").text("Back to compact view");
			isFullView = true;
			if (!isSmall){
			$("#mCSB_1_container").removeAttr("style");
			cards.mCustomScrollbar("disable", true);
			}
		}
		else{
			speakerPage.removeClass("speakers-page__view_full");
			$(".speakers-page__link").text("See full line up");
			isFullView = false;
			if (!isSmall){
			cards.mCustomScrollbar("update");
		}
		}
	});
/*
	if(window.matchMedia('(max-width: 428px)').matches) {
		speakerPage.addClass('speakers-page__view_full');
		controls.addClass('speakers-page__controls_hidden');
		alert("HI!");
	}
	else{
		speakerPage.removeClass('speakers-page__view_full');
		controls.removeClass('speakers-page__controls_hidden');
	}*/
	/* JavaScript Media Queries */
});


/*var cards = $(".speakers-page__cards");
		var matrix = cards.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
		var x = matrix[12] || matrix[4];
		x -= 200;
		$(".speakers-page__cards").css("transform", "translateX("+ x +"px)");
		if (x > cards.children().length * cards.children()[0].css)
	});*/