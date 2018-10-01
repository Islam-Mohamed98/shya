$(function () {

	'use strict';

	// Option Box
	$('.option-box .icon i').on('click',function () {
		$('.option-box').toggleClass('active');
	});

		$('.owl-carousel').owlCarousel({
	    loop:true,
	    responsiveClass:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true,
	    autoWidth: true,
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	})

	var infoHDy = $('.info').outerWidth(true); // Width Of Info Div dynamic
	
	$('.content').css('margin-left', infoHDy); // Margin-Left of Content


	$( window ).resize(function() {
	  	infoHDy = $('.info').outerWidth(true);
	  	$('.content').css('margin-left', infoHDy);
	});

	// Switching Between Sections
	$('nav li').click(function () {
		$(this).addClass('active').siblings().hide().removeClass('active'); // Add Class Active To Li
		$($(this).data('sec')).siblings().hide();// FadeOut All Sibling Sections
			$($('nav li.active').data('sec')).show(0, function () { // FadeIn Selected Section
				$('nav li').show();	
			}); 
	});

	// Close Link
	$('.info i.fa-times').click(function () {
		$(this).hide();
		$('.info').animate({
			left: -infoHDy
		},200);
  			$('.content').animate({ // Add Magrin 0 To NavBar And Content
  				marginLeft: 0
  			},200, function() {
  				if ($(window).width() > 991.98) {
  					$('.content > i.toggle-info').show();
  				} else {
  					$('.content > i.toggle-info').hide();
  				}
  			});
	});

	// Open Link
	$('.content > i.toggle-info').click(function () {
		$('.content > i.toggle-info').hide();
		$('.content').animate({
  			marginLeft: infoHDy
  		},200);
  			$('.info').animate({
				left: 0
			},200, function () {
				$('.info i').show();
			});
	});

});
