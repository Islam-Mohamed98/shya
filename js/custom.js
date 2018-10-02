$(function () {

	'use strict';

	// Option Box
	$('.option-box .icon i').on('click',function () {$('.option-box').toggleClass('active');});

	$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    autoWidth: true,
    dots: false,
	})

	var infoHDy = $('.info').outerWidth(true);
	$('.content').css({'margin-left': infoHDy}); // Margin-Left of Content
	$('.sections').css({'min-height' : $(window).height()}); // Height of Sections

	$(window ).resize(function() {
	  	$('.sections').css({'min-height' : $(window).height()}); // Height of Sections
	});

	// Switching Between Sections
	$('nav li').click(function () {
		$(this).addClass('active').siblings().hide().removeClass('active'); // Add Class Active To Li
		$($(this).data('sec')).siblings().hide(); // FadeOut All Sibling Sections
		if($(this).data('sec') === '.portfolio') { $('.formixitup').mixItUp();} // For MixItUp
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

	// Trigger Nice Scroll Plugin
	//$('html').niceScroll();

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
