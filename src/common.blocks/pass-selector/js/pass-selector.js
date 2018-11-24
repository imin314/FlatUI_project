$(document).ready(function(){
	var tickbox = $(".pass-selector__tickbox").find("input[type=checkbox]");
	tickbox.on('change', function() {
		tickbox.not(this).prop('checked', false);  
	});
});