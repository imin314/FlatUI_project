$(document).ready(function(){
	var tickbox = $(".pass-selector__tickbox input[type=checkbox]");
	tickbox.on('change', function() {
		tickbox.not(this).prop('checked', false)
		if ($('input[type="checkbox"]:checked').length > 0){
			$(this).prop('checked', true);
		}
	});
});