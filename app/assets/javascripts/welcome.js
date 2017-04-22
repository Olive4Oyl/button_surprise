$(function() {
	if ($('.welcome.index').length) {

		appButton();
	}

});

function appButton(){
	$(".appButton").on("click", function(){
		location.href = "https://git.heroku.com/limitless-dawn-60830/games";
	});
}

