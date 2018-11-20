$(window).on("load",function(){
	var cardHeight = parseFloat($(".speaker-card").css("height"))*0.46;
	alert(cardHeight);
	$(".speaker-card__text").css("height", cardHeight+"px")
	$(".speaker-card__text").mCustomScrollbar();
});