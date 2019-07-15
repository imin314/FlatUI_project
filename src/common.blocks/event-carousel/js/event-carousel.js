$(window).on("load",function(){
	$(".event-carousel__cards").mCustomScrollbar({
		axis:"x",
		theme:"dark-thin",
		autoExpandScrollbar:true,
		advanced:{autoExpandHorizontalScroll:true}

	});

	$('.event-carousel__card').find('.button').dcalendarpicker({
		theme: "blue"
	});
});