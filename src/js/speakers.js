$(document).ready(function() {
    $(".speakers-page__right-button").click(function(){
		var cards = $(".speakers-page__cards");
		var scrollValue = cards.scrollLeft() + 200;
		cards.animate({scrollLeft: scrollValue}, 500);
	});
	
});

/*var cards = $(".speakers-page__cards");
		var matrix = cards.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
		var x = matrix[12] || matrix[4];
		x -= 200;
		$(".speakers-page__cards").css("transform", "translateX("+ x +"px)");
		if (x > cards.children().length * cards.children()[0].css)
	});*/