$(function () {

	'use strict';

	var infoH = $('.info').css('width'); // Width Of Info Div by Css
	var infoHDy = $('info').outerWidth(true); // Width Of Info Div dynamic
	
	
	$('.info').height($(window).height()); // Adust Div Size 
	$('.sections > div').css('min-height', $(window).height() - $('nav.navbar').outerHeight(true)); // Height Of Content

	$('.content').css('margin-left', infoH); // Margin-Left of Content
	$('nav.navbar').css('margin-left', infoH); // Margin-Left of Content
	
	// Calc Nav Outer Height And Add Width To Div Sections


	$( window ).resize(function() {
  		$('.info').height($(window).height()); // Adust Div Size
  		infoHDy = $('info').outerWidth(true);
  		$('.content').css('margin-left', infoHDy);
	});

	// Switching Between Sections
	$('nav li').click(function () {
		$(this).addClass('active').siblings().hide().removeClass('active'); // Add Class Active To Li
		$($(this).data('sec')).siblings().slideUp(600, function () { // FadeOut All Sibling Sections
			$($('nav li.active').data('sec')).slideDown(500, function () { // FadeIn Selected Section
				$('nav li').show();
			
			}); 
		});
	});

	// Close Link
	$('.info i.fa-times').click(function () {
		$(this).hide();
		$('.info').animate({
			width: 0
		},500, function () {
  			$('.content').animate({
  				marginLeft: 0
  			},500, function() {
  				$('.content i.fa-plus').show();
  			});
		});
	});

	// Open Link
	$('.content i.fa-plus').click(function () {
		$('.content i.fa-plus').hide();
		$('.content').animate({
  			marginLeft: infoH
  		},500, function () {
  			$('.info').animate({
				width: infoH
			},500, function () {
				$('.info i').show();
			});
  		});
	});

});
