$(document).ready(function () {
	anchooo();
	$(window).resize(function(){
		anchooo();
	});
});

function anchooo () {
	if($(window).width() < anchoventana) {
		var tmp = $(window).width();
		tmp = (tmp *  58)/100;
		$('#wideo').height(tmp);
	};
}