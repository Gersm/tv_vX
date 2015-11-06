var anchoventana = 769;
$(document).ready(function () {
	var temp = 0;
	var wiii = 0;
	
	$('nav').click(function () {
		wiii = document.body.clientWidth;
		if(wiii < anchoventana){
			if (temp==0) {
				$('nav').addClass('desplegado');
				temp = 1;
			}else{
				$('nav').removeClass('desplegado');
				temp = 0;
			};
		};
	});


/*	$(window).resize(function(){
		if(parseInt($(window).width()) > anchoventana){
			if (temp==1) {
				$('#menu').css('background','rgba(0,0,0,0)')
				$('nav').css('height','70')
				temp = 0
			};
		};
	});
*/

	$('nav').mouseenter(function(){
		if($(window).width() < anchoventana){
			$('html,body').css('cursor','pointer')
		};
	});
	$('nav').mouseleave(function(){
		if($(window).width() < anchoventana){
			$('html,body').css('cursor','default')
		};
	});
});