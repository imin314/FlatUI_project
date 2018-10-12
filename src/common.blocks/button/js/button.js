import './jquery.materialripple.js';
	$(function(){
		$('.button').click(function(){
			var currentColors = $(this).css(["background-color", "color"]);
			if (!$(this).hasClass("button_color_reverse")){
			$(this).css({
				"background-color": currentColors["background-color"],
				"color": currentColors["color"],
				"box-shadow": "none"
			});
			alert("test");
		}
		});
		$('.ripple').materialripple();
	});