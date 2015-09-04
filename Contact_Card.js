function showDescription(){
	$('#contact_card').click(function(){
		$('#contact_card').append('.activeDescription');
	});
}

$(document).ready(function(){
	showDescription();

	$('button').click(function(){
		var append=$('<div id="contact_card"></div>');
			$(this).parent().append(append);
		var array=[];
	
	$(".activeInput").each(function(){
		array[$(this).attr("name")]=$(this).val();
		$('#contact_card').append($(this).val());
		$('input').focus(function(){
		$(this).css('outline-color', '#FF0000');

		showDescription();
			});	
		});
	});
});




