$(document).ready(function() {
	var isFullView = false;
    $(".speakers-page__right-button").click(function(){
		$(".speakers-page__cards").mCustomScrollbar("scrollTo","-=500");
	});

	$(".speakers-page__left-button").click(function(){
		$(".speakers-page__cards").mCustomScrollbar("scrollTo","+=500");
	});

	$(".speakers-page__link").click(function(){
		
		if (!isFullView) {
			$(".speakers-page").addClass("speakers-page__view_full");
			$(".speakers-page__link").text("Back to compact view");
			isFullView = true;
			$("#mCSB_1_container").removeAttr("style");
			$(".speakers-page__cards").mCustomScrollbar("disable", true);
		}
		else{
			$(".speakers-page").removeClass("speakers-page__view_full");
			$(".speakers-page__link").text("See full line up");
			isFullView = false;
			$(".speakers-page__cards").mCustomScrollbar("update");
		}
	});
});

$(window).on("load",function(){
	$(".speakers-page__cards").mCustomScrollbar({
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
});


/*var cards = $(".speakers-page__cards");
		var matrix = cards.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
		var x = matrix[12] || matrix[4];
		x -= 200;
		$(".speakers-page__cards").css("transform", "translateX("+ x +"px)");
		if (x > cards.children().length * cards.children()[0].css)
	});*/