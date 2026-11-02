/* =================================
------------------------------------
	Game Warrior Template — LUKZI Optimized
------------------------------------ 
====================================*/

'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").fadeOut(150);
});

(function($) {

	/*------------------
		Navigation Toggle
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(250);
		event.preventDefault();
	});

	/*------------------
		Smooth Scroll & Auto Close Mobile Menu
	--------------------*/
	$('.main-menu a[href*="#"]').on('click', function(e) {
		var href = $(this).attr('href');
		var hashIndex = href.indexOf('#');
		if (hashIndex !== -1) {
			var targetId = href.substring(hashIndex);
			if (targetId && targetId !== '#') {
				var $target = $(targetId);
				if ($target.length) {
					e.preventDefault();
					if ($(window).width() <= 768) {
						$('.main-menu').slideUp(200);
					}
					$('html, body').stop().animate({
						scrollTop: $target.offset().top - 65
					}, 350);
				}
			}
		}
	});

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		if (bg) {
			$(this).css('background-image', 'url(' + bg + ')');
		}
	});

	/*------------------
		Hero Slider
	--------------------*/
	if ($('.hero-slider').length) {
		$('.hero-slider').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			mouseDrag: false,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items: 1,
			autoplay: true
		});
		var dot = $('.hero-slider .owl-dot');
		dot.each(function() {
			var index = $(this).index() + 1;
			if(index < 10){
				$(this).html('0').append(index);
				$(this).append('<span>.</span>');
			}else{
				$(this).html(index);
				$(this).append('<span>.</span>');
			}
		});
	}

	/*------------------
		News Ticker
	--------------------*/
	if ($('.news-ticker').length) {
		$('.news-ticker').marquee({
			duration: 10000,
			delayBeforeStart: 0,
			direction: 'left',
			duplicated: true
		});
	}

})(jQuery);
