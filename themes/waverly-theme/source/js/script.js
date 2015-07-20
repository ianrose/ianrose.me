window.onload = init();

function init() {
	function toggleClass(element, className) {
		if (!element || !className) {
			return;
		}

		var classString = element.className, nameIndex = classString.indexOf(className);
		if (nameIndex == -1) {
			classString += ' ' + className;
		}
		else {
			classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
		}
		element.className = classString;
	}

	document.getElementById('js-toggle-menu').addEventListener('click', function () {
		toggleClass(document.getElementById('js-menu'), 'is-open');
		toggleClass(document.getElementById('js-toggle-menu'), 'is-active');
	});
}
