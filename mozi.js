$(function() {
	$('#input-area').on('keydown keyup keypress change', function() {
		var length = $(this).val().length;
		$('#length-char').val(length);
	});
});