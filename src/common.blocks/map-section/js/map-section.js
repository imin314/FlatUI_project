$(document).ready(function(){
	$('.map-section__search').click(function(){
		var iframe = document.getElementById("map1");
		iframe.src = iframe.src;
		//$('#your_iframe').attr('src', $('#your_iframe').attr('src'));
	});

	var drag = false;
	$('.map-section__pin').click(function(){
		drag = drag === true ? false : true;
	});

	$(".map-section__map").mousedown(function () {
			if (drag === true){
				var map = $(this);
				var mapOffset = map.offset();
				map.mousemove(function(e){
					var leftPos  = map[0].getBoundingClientRect().left + $(window)['scrollLeft']();
					var topPos   = map[0].getBoundingClientRect().top + $(window)['scrollTop']();
					var pin = $('.map-section__main-pin');
					var pinWidth = pin.width();
					var pinHeight = pin.height();
					$('.map-section__main-pin').css({'top': e.pageY - topPos - (pinHeight/2), 'left': e.pageX-leftPos - pinWidth/2, cursor: 'pointer'});
			});
			}	
		});

		$(".map-section__map").mouseup(function() {
		if (drag === true){
			$(this).off("mousemove");
			drag = false;
			alert(drag)
		}
		});
	
	});