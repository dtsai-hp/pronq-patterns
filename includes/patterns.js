var header = "<nav class='uk-navbar'> \
	<div class='uk-container uk-container-center'> \
		<a class='uk-navbar-brand' href='index.html'> \
			<img style='height: 40px;' src='http://www.hpobteam.com/imgs/assets/HP-White.png'/> \
		</a> \
		<ul class='uk-navbar-nav uk-hidden-small'> \
			<li><a href='http://www.hpobteam.com/styles.html'>Styles</a></li> \
			<li><a href='http://www.hpobteam.com/ui.html'>UI</a></li> \
			<li><a href='http://www.hpobteam.com/components.html'>Components</a></li> \
		</ul> \
		<div class='uk-navbar-flip'> \
			<ul class='uk-navbar-nav uk-visible-small'> \
				<li id='mobile-menu'><a href='#globalnav-mobile'> \
					<img src='http://www.hpobteam.com/downloads/psds/navigation/assets/hamburger.png'></a> \
				</li> \
			</ul> \
			<ul class='uk-navbar-nav uk-hidden-small'> \
				<li><a href='http://www.hpobteam.com/resources.html'>Resources</a></li> \
				<li><a href='http://www.hpobteam.com/change.html'>Change Log</a></li> \
			</ul> \
		</div> \
	</div> \
</nav> \
<div class='obt-mobilenav' id='globalnav-mobile'> \
	<ul> \
		<li><a href='http://www.hpobteam.com/styles.html'>Styles</a></li> \
		<li><a href='http://www.hpobteam.com/ui.html'>UI</a></li> \
		<li><a href='http://www.hpobteam.com/components.html'>Components</a></li> \
		<li><a href='http://www.hpobteam.com/resources.html'>Resources</a></li> \
		<li><a href='http://www.hpobteam.com/change.html'>Change Log</a></li> \
	</ul> \
</div>";

var footer = "<div class='uk-container uk-container-center'> \
	<div class='uk-grid uk-grid-small'> \
		<div class='uk-width-1-1 top'> \
			<ul> \
				<li><a href='http://www.pronq.com'>Pronq.com</a></li> \
				<li><a href='styles.html'>Styles</a></li> \
				<li><a href='ui.html'>UI</a></li> \
				<li><a href='components.html'>Components</a></li> \
				<li><a href='resources.html'>Resources</a></li> \
				<li><a href='changes.html'>Change log</a></li> \
			</ul> \
		</div> \
		<div class='uk-width-1-1 bottom'> \
			Privacy statement&nbsp;&nbsp;&bull;&nbsp;&nbsp;Terms of Use&nbsp;&nbsp;&bull;&nbsp;&nbsp;&copy; 2015 Hewlett-Packard Development Company, L.P  \
		</div> \
	</div> \
</div>";


$('#mobile-menu').on('click', function() {
	$('#globalnav-mobile').slideToggle('slow');

});

