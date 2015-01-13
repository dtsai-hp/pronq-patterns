document.write("<div id='pq-toTop'><i class='fa fa-angle-up'></i></div>");

$("#pq-toTop").on("click",function() { $('html, body').animate({ scrollTop: 0 }, 'slow'); });

$(window).scroll(function() {
	if ($(this).scrollTop()) {
		$('#pq-toTop:hidden').stop(true, true).fadeIn();
	} else {
		$('#pq-toTop').stop(true, true).fadeOut();
	}
});
