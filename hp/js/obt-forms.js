$(document).ready(function(){

	$('.uk-form-row').find('input').on('blur focus', function(e){

		// Cache our selectors
		var $this = $(this),
		$parent = $this.parent();

		// Add or remove classes
		if (e.type == 'blur') {
			$parent.removeClass('show-label');
		}
		else if (e.type == 'focus') {
				$parent.addClass('show-label');
			}
	});

	$('.uk-form-row').find('textarea').on('blur focus', function(e){

		// Cache our selectors
		var $this = $(this),
		$parent = $this.parent();

		// Add or remove classes
		if (e.type == 'blur') {
			$parent.removeClass('show-label');
		}
		else if (e.type == 'focus') {
			$parent.addClass('show-label');
		}
	});
});
