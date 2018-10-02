$(function () {

	'use strict';

	// Loading Screen
	$(window).on('load',function () {

		$('body').css('overflow', 'auto');

		$('.loading-screen .sk-cube-grid').fadeOut(1000, function () {
			$(this).parent().fadeOut(1000, function () {
				$(this).remove();
			});
		});
	});

	// Option Box
	$('.option-box .icon i').on('click',function () {$('.option-box').toggleClass('active');});

	// Cwl-Carousel
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    responsiveClass:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true,
	    autoWidth: true,
	    dots: false,
	})

	var infoHDy = $('.info').outerWidth(true); // Get Width OF Class Info
	$('.content').css({'margin-left': infoHDy}); // Margin-Left of Content
	$('.sections').css({'min-height' : $(window).height()}); // Height of Sections

	$(window ).resize(function() {
	  	$('.sections').css({'min-height' : $(window).height()}); // Height of Sections
	});

	// Switching Between Sections
	$('nav li').click(function () {
		$(this).addClass('active').siblings().hide().removeClass('active'); // Add Class Active To Li
		$($(this).data('sec')).siblings().hide(); // FadeOut All Sibling Sections
		$($('nav li.active').data('sec')).show( 0, function () {
			// Mix it Up
			if($(this).hasClass('portfolio')) {
			 	$('.formixitup').mixItUp({
				animation: {
        			duration: 200
    			}
			});
			} // For MixItUp
		});
		$('nav li').show(); 
	});


	// Close Link
	$('.info i.fa-times').click(function () {
		$(this).hide();
		$('.info').css({'left': -infoHDy});
  		$('.content').css({'marginLeft': 0});
  			if ($(window).width() > 991.98) {
  				$('.content > i.toggle-info').show();
  			} else {
  				$('.content > i.toggle-info').hide();
  			}
	});

	// Open Link
	$('.content > i.toggle-info').click(function () {
		$('.content > i.toggle-info').hide();
		$('.content').css({'marginLeft': infoHDy});
  		$('.info').css({'left': 0});
		$('.info i').show();
	});


	// Theme Color
	$('.color-option li')
	.eq(0).css('background', 'linear-gradient(to right, #ff9068, #fd746c)').end()
	.eq(1).css('background', 'linear-gradient(to left, #b24592, #f15f79)').end()
	.eq(2).css('background', 'linear-gradient(to bottom, #ffb75e, #ed8f03)');

	$('.color-option li').click( function () {
		$(this).addClass('active').siblings().removeClass('active');
		$('body').attr('data-theme-color', $(this).attr('data-color'));
	});

	$('.color-option li').eq(0).click()
	


});


