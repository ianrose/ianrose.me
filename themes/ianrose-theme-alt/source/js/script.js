$('.js-toggle-menu').click(function () {
	$('.layout--nav').toggleClass('is-active');
	$('.layout--menu').toggleClass('is-open');
});

$('.js-toggle-night').click(function () {
	$('body').toggleClass('theme--night');
});


function day() {
	body.className = "lightSwitch";
};

function night() {
	body.className = "darkSwitch";
};

function reset() {
	body.className = "";
};

$(function () {
	/* RegEx to grab the "bgColor" cookie */
	var bgColor = document.cookie.replace(/(?:(?:^|.*;\s*)bgColor\s*\=\s*([^;]*).*$)|^.*$/, "$1");

	var button = $('input[type=button].changeBg');
	button.on('click', function (event) {
		event.preventDefault();

		/* Executing the function associated with the button */
		eval($(this).val().toLowerCase() + "();");

		button.not($(this)).removeAttr('disabled');
		if ($(this).val() != "Reset") {
			$(this).attr('disabled', '');

			/* Here we create the cookie and set its value, does not happen if it's Reset which is fired. */
			document.cookie = "bgColor="+$(this).val();
		}
	});

	/* If the cookie is not empty on page load, execute the function of the same name */
	if(bgColor.length > 0)
	{
		eval(bgColor.toLowerCase()+'()');

		/* Disable the button associated with the function name */
		$('button[value="'+bgColor+'"]').attr("disabled","disabled");
	}
});
