$(function() {
	if ($('.welcome.index').length) {

		appButton();
	}

});

function appButton(){
	$(".click").on("click", function(){
		location.href = "https://limitless-dawn-60830.herokuapp.com/games";
	});
}


