import './jquery.materialripple.js';
	$(function(){
		$('.button').click(function(){
			var currentColors = $(this).css(["background-color", "color"]);
			$(this).css({
				"background-color": currentColors["background-color"],
				"color": currentColors["color"],
				"box-shadow": "none"
			});
		});
		$('.ripple').materialripple();
	});