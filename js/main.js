/*global $, document*/

// loader
$(window).on('load', function() {
	$('.loader').fadeOut();
	$('body.no-transition').removeClass('no-transition')
})
$(document).ready(function () {
    
    'use strict';
	$('.nav-list a[href="#"]').click(function (e) {
		e.preventDefault()
	})
	$('.search-btn').click(function () {
		$('.search-popup').addClass('show')
	})
	$('.close-search').click(function () {
		$('.search-popup').removeClass('show')
	})

	$(window).on("scroll", function() {
		if($(window).scrollTop() > $(window).height()) {
			$(".header").addClass("fixed");
		} else {
			$(".header").removeClass("fixed");
		}
	})
	
    // nav btn
	$('.nav-btn').click(function () {
		$('.main-nav .nav-list, .main-nav .overlay').addClass('show')
		$(this).addClass('active')
	});
	$('.main-nav .overlay, .close-bar').click(function () {
		$('.main-nav .nav-list, .main-nav .overlay').removeClass('show')
		$('.nav-btn').removeClass('active')
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
        nav: false,
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
		navText: [`<img src=${right_arrow} />`, `<img src=${left_arrow} />`],
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
		navText: [`<img src=${right_arrow} />`, `<img src=${left_arrow} />`],
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
    $('.product-big-slide').owlCarousel({
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
		navText: [`<img src=${right_arrow} />`, `<img src=${left_arrow} />`],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
    $('.works-slide').owlCarousel({
        loop: false,
        autoplay: false,
        margin: 30,
        nav: true,
        dots: false,
        autoWidth: false,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        dragEndSpeed: 1000,
        slidSpeed: 5000,
        paginationSpeed: 1500,
		navText: [`<img src=${right_arrow} />`, `<img src=${left_arrow} />`],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });


	// partner-slide
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
		navText: [`<img src=${right_arrow} />`, `<img src=${left_arrow} />`],
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

	// Start team slider
	$('.team-slider.owl-carousel').owlCarousel({
		items: 5,
		rtl: false,
		center: true,
		loop:true,
		// autoplay: true,
		margin:30,
		autoplayTimeout: 6000,
		smartSpeed: 700,
		dragEndSpeed: 700,
		slidSpeed: 900,
		paginationSpeed: 900,
		nav: true,
		navText: ['<img src=/public/site/img/icons/right.png />', '<img src=/public/site/img/icons/left.png />'],
		responsive: {
			320: {
				items: 2,
				center: false
			} ,

			480: {
				items: 2,
				center: false
			} ,

			768: {
				items: 3
			} ,

			991: {
				items: 5
			}
		}
	});
});

// addEventListener(document, "touchstart", function(e) {
// 	console.log(e.defaultPrevented);  // will be false
// 	e.preventDefault();   // does nothing since the listener is passive
// 	console.log(e.defaultPrevented);  // still false
// }, Modernizr.passiveeventlisteners ? {passive: true} : false);

    
var right_arrow = "img/right.png";
var left_arrow = "img/left.png";

























