/*global $, document*/

$(document).ready(function () {
    
    'use strict';
    $(function(){
		console.log($("[data-html]").data('html') + ".html")
		$("[data-html]").each(function() {
			$(this).load($(this).data('html') + ".html"); 
		})
	  });
	// loader
	$(window).on('load', function() {
		$('.loader').fadeOut()
	})

    // nav btn
	$('.nav-btn').click(function () {
		$('.main-nav .nav-list, .main-nav .overlay').addClass('show')
	});
	$('.main-nav .overlay, .close-bar').click(function () {
		$('.main-nav .nav-list, .main-nav .overlay').removeClass('show')
	});

	// mood setter
	if(!localStorage.mood || localStorage.mood == 'light') {
		localStorage.mood = 'light';
		$('.mode-control i').removeClass('active');
		$('.mode-control i.light').addClass('active');
	} else {
		$('.mode-control i').removeClass('active');
		$('.mode-control i.dark').addClass('active');
	}
	let mood = localStorage.mood;
	let moodSetter = function() {
		if(localStorage.mood == 'light') {
			$('body').addClass('light-theme').removeClass('dark-theme');
		}
		if(localStorage.mood == 'dark') {
			$('body').addClass('dark-theme').removeClass('light-theme');
		}
	};
	moodSetter();
	$('.mode-control i').click(function() {
		$(this).hasClass('light') ? localStorage.mood = 'light' : localStorage.mood = 'dark';
		moodSetter();
		$('.mode-control i').removeClass('active');
		$(this).addClass('active');
	});


	let owlDirection = $('html[dir="rtl"]').length == 1 ? true : false;
    // Start Partners Slider
	
    $('.slider-1').owlCarousel({
		dir: owlDirection ? 'rtl' : 'ltr',
		items: 1,
        loop:true,
        autoplay: true,
        margin:0,
        nav: true,
        navText: ['<img src=img/icons/right.png />', '<img src=img/icons/left.png />'],
        animateOut: 'fadeOut'
	});
	
	// works slider
	$('.slider-2').owlCarousel({
		loop: true,
		autoplay: true,
		margin: 30,
		nav: true,
		dots: false,
		autoWidth: false,
		autoplayTimeout: 6000,
		smartSpeed: 700,
		dragEndSpeed: 700,
		slidSpeed: 900,
		paginationSpeed: 900,
		navText: ['<img src=img/icons/right.png />', '<img src=img/icons/left.png />'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});

	// stores slider
    $('.slider-3').owlCarousel({
		dir: owlDirection ? 'rtl' : 'ltr',
		items: 1,
        loop:true,
        autoplay: true,
        margin:0,
        nav: false,
        dots: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
		paginationSpeed: 900,
		touchDrag  : false,
		mouseDrag  : false
	});

	if($('.slider-3').length > 0) {
		let imgArray =  eval($('.slider-3').data('dots'));
		$('.slider-3 .owl-dot').each(function(i) {
			console.log(imgArray[0].img)
			$(this).append(`<img src="${imgArray[i].img}"> <span class="tit">${imgArray[i].title}</span>`)
		});
	}

	// product-slide
    $('.product-slide').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: false,
        dots: false,
        autoWidth: false,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        dragEndSpeed: 1000,
        slidSpeed: 5000,
        paginationSpeed: 1500,
		navText: ['<img src=img/icons/right.png />', '<img src=img/icons/left.png />'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
	// product-slide
    $('.partners-slide').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true,
        dots: false,
        autoWidth: false,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        dragEndSpeed: 1000,
        slidSpeed: 5000,
		paginationSpeed: 1500,
		navText: ['<img src=img/icons/right.png />', '<img src=img/icons/left.png />'],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});



    


























