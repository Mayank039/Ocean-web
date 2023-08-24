
// Navbar Design 


$(".navbar-nav .nav-link").on("click", function(){
	   $(this).parent().addClass('active');
	   $(this).parent().siblings().removeClass('active');
});


// search box open
$(".top_cart_links .search_icon").on("click", function(){
     $(".search_container").addClass('show');
     $("body").addClass('o_hidden');
});

$(".search_container .remove_btn").on("click", function(){
     $(this).parent().parent().parent().removeClass('show');
     $("body").removeClass('o_hidden');
});

$(".search_field .btn").on("click", function(){
     $(this).parent().parent().parent().removeClass('show');
     $("body").removeClass('o_hidden');
});

//===== Init AOS js

$(document).ready(function(){
  AOS.init({
    duration: 1200,
  })
});



 // new WOW().init();


              

// Scroll to top icon

$('body').prepend(`<div class="go-top go-top-btn">
					<img src="images/scroll_top_img.png" alt="">
				</div>`);

	$(window).on('scroll', function() {
		var scrolled = $(window).scrollTop();
		// if (scrolled < 300) $('.go-top').removeClass('active');
		// if (scrolled > 300) $('.go-top').addClass('active');

		if ( $(window).scrollTop() > 300 ) {
			$('.go-top').addClass('active');
		} else {
			$('.go-top').removeClass('active');
		}
	});


	$('.go-top').on('click', function() {
		$('html, body').animate(
			{
				scrollTop: '0'
			},
			1200
		);
	});


// Fix Header on Page Scroll

$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
		$('.my_navbar').addClass('sticky');
		} else {
		$('.my_navbar').removeClass('sticky');
		}
});


// For Cart plus - minus
$(document).ready(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});


/*=============================================
  =        Preloader            =
=============================================*/
function preloader() {
  $('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
  preloader();
  // mainSlider();
  // aosAnimation();
  // wowAnimation();
});

// Gallery Page Design

$(document).ready(function() {
  $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.gallery-item:not(.slick-cloned) a,.pro_big_thum:not(.slick-cloned) a', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true
            }
        });
    });

});



// size guide popup design

$(".size_link").click(function() {
  $(".size_guide_popup").fadeIn(500);
});

$(".size_guide_popup .btn-close").click(function() {
  $(".size_guide_popup").fadeOut(500);
});



// Thumbnail Slick Slider


$(".testimonial_slider").slick({
      dots: false,
      arrows : true,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          vertical: false,
          verticalSwiping: false
        }
      }
    ],
        
});



$(".blog_slider").slick({
      dots: false,
      arrows : true,
      infinite: true,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          vertical: false,
          verticalSwiping: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          vertical: false,
          verticalSwiping: false
        }
      }
    ],
        
});

























