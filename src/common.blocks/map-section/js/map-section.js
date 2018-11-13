$(document).ready(function(){
	$('.map-section__search').click(function(){
		var iframe = document.getElementById("map1");
		iframe.src = iframe.src;

		$('.map-section__main-pin').css({'top': '50%', 'left': '50%'});
		//$('#your_iframe').attr('src', $('#your_iframe').attr('src'));
	});

	var drag = false;

	$('.map-section__pin').click(function(){
		if (drag === false){
			drag = true;
			$("#map1").css("pointer-events", "none");
			$('.map-section__main-pin').addClass('map-section__main-pin_type_waiting');
		}
		else{
			drag = false;
			$("#map1").css("pointer-events", "auto");
			$('.map-section__main-pin').removeClass('map-section__main-pin_type_waiting');
		}
	});

	$(".map-section__map").mousedown(function () {
			if (drag === true){
				var map = $(this);
				var mapOffset = map.offset();
				$('.map-section__main-pin').removeClass('map-section__main-pin_type_waiting');
				map.mousemove(function(e){
					var leftPos  = map[0].getBoundingClientRect().left + $(window)['scrollLeft']();
					var topPos   = map[0].getBoundingClientRect().top + $(window)['scrollTop']();
					var pin = $('.map-section__main-pin');
					var pinWidth = pin.width();
					var pinHeight = pin.height();
					$('.map-section__main-pin').css({'top': e.pageY - topPos - (pinHeight/2), 'left': e.pageX-leftPos - pinWidth/2});
			});
			}	
		});

		$(".map-section__map").mouseup(function() {
		if (drag === true){
			$(this).off("mousemove");
			drag = false;
			$("#map1").css("pointer-events", "auto");
			$('.map-section__main-pin').removeClass('map-section__main-pin_type_waiting');
		}
		});
	
	});