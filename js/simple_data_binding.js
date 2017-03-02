
$(document).ready(function(){
	$('#textArea').keypress(function(e){
		$('#myDiv').html($(this).val());
	});
});
 