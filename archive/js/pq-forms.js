		  $(document).ready(function(){

			$('.form-group').find('input').on('blur focus', function(e){			     

			    // Cache our selectors
			    var $this = $(this),
			        $parent = $this.parent();
			 
			    // Add or remove classes
				if (e.type == 'blur') {
					$parent.addClass('js-hide-label').removeClass('js-unhide-label');
			    } 
			    else if (e.type == 'focus') {
					$parent.addClass('js-unhide-label').removeClass('js-hide-label');
			    }
			});

			//	$('input.form-control').floatlabel();
		  });