document.addEventListener('readystatechange', function () {
	if (document.readyState == 'interactive') {
		// Add toggle button
		var toggleBtn = document.createElement('div');
		toggleBtn.appendChild(document.createTextNode('Toggle Grid'));
		toggleBtn.id = 'dev_grid-toggle';

		var verticals = document.createElement('div');
		verticals.className = 'dev_grid-verticals midwidth';

		// Generate grid
		verticals.appendChild(document.createElement('span'));
		for (var cols = 12; cols > 0; cols--) {
			verticals.appendChild(document.createElement('div'));
			verticals.appendChild(document.createElement('span'));
		}

		// Add them to the body
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(verticals);
		body.appendChild(toggleBtn);

		toggleBtn.addEventListener('click', function (e) {
			body.classList.toggle('show-grid');
		});
		if (window.location.hash === '#grid') {
			body.classList.add('show-grid');
		}
	}
})
