document.write("<div class='backgrounds hidden-xs'>\
Background Color<br />\
<div onclick=\"$('body').css('background-color','#FFFFFF');\" style='background-color: #FFFFFF;'></div>\
<div onclick=\"$('body').css('background-color','#F7F7F7');\" style='background-color: #F7F7F7;'></div>\
<div onclick=\"$('body').css('background-color','#F2F8F8');\" style='background-color: #F2F8F8;'></div>\
<div onclick=\"$('body').css('background-color','#F5F6F7');\" style='background-color: #F5F6F7;'></div>\
<div onclick=\"$('body').css('background-color','#FDF9F5');\" style='background-color: #FDF9F5;'></div>\
<div onclick=\"$('body').css('background-color','#F3F7F5');\" style='background-color: #F3F7F5;'></div>\
\
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