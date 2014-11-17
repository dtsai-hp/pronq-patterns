document.write("<div class='backgrounds hidden-xs'>\
Background Color<br />\
<div onclick=\"$('body').css('background-color','#FFFFFF');\" style='background-color: #FFFFFF;'>White</div>\
<div onclick=\"$('body').css('background-color','#F7F7F7');\" style='background-color: #F7F7F7;'>Grey</div>\
</div>");

$(document).ready(function() {

	$(".backgrounds").click(function() {
		if ( $(this).css("right") == "-75px") {
			$(this).css("right", "-118px");
		}
		else {
			$(this).css("right", "-75px");
		}
	});
})
