// go to top
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
    $('#toTop').fadeIn(200); // Fade in the arrow
  } else {
    $('#toTop').fadeOut(200); // Else fade out the arrow
  }
});
$('#toTop').click(function () { // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0 // Scroll to top of body
  }, 500);
});

// go to div
$('.bottom-header .main-menu a,.side-menu-nav .main-menu>li>a').on('click', function () {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
  if (target.length) {
    $('html,body').animate({
      scrollTop: target.offset().top - 30
    }, 1000);
    return false;
  }
});

// auto generated side menu from top header menu start
var topHeaderMenu = $('header nav > ul').clone();
var sideMenu = $('.side-menu-wrap nav');
sideMenu.append(topHeaderMenu);
if ($(sideMenu).find('.sub-menu').length !== 0) {
  $(sideMenu).find('.sub-menu').parent().append('<i class="fas fa-chevron-right d-flex align-items-center"></i>');
}
// auto generated side menu from top header menu end

$('.side-menu-wrap nav > ul > li > a').on('click', function () {
  sideMenuCloseAction();
});

// open close sub menu of side menu start
var sideMenuList = $('.side-menu-wrap nav > ul > li > i');
$(sideMenuList).on('click', function () {
  if (!($(this).siblings('.sub-menu').hasClass('d-block'))) {
    $(this).siblings('.sub-menu').addClass('d-block');
  } else {
    $(this).siblings('.sub-menu').removeClass('d-block');
  }
});
// open close sub menu of side menu end

// side menu close start
$('.side-menu-close').on('click', function () {
  if (!($('.side-menu-close').hasClass('closed'))) {
    $('.side-menu-close').addClass('closed');
  } else {
    $('.side-menu-close').removeClass('closed');
  }
});
// side menu close end

// auto append overlay to body start
$('.wrapper').append('<div class="custom-overlay h-100 w-100"></div>');
// auto append overlay to body end

// open side menu when clicked on menu button start
$('.side-menu-close').on('click', function () {
  if (!($('.side-menu-wrap').hasClass('opened')) && !($('.custom-overlay').hasClass('show'))) {
    $('.side-menu-wrap').addClass('opened');
    $('.custom-overlay').addClass('show');
  } else {
    $('.side-menu-wrap').removeClass('opened');
    $('.custom-overlay').removeClass('show');
  }
})
// open side menu when clicked on menu button end

// close side menu when clicked on overlay start
$('.custom-overlay').on('click', function () {
  sideMenuCloseAction();
});

function sideMenuCloseAction() {
  $('.side-menu-wrap').addClass('open');
  $('.wrapper').addClass('freeze');
  $('.custom-overlay').removeClass('show');
  $('.side-menu-wrap').removeClass('opened');
  $('.side-menu-close').removeClass('closed');
  $(sideMenuList).siblings('.sub-menu').removeClass('d-block');
}
// close side menu when clicked on overlay end

// close side menu over 992px start
$(window).on('resize', function () {
  if ($(window).width() >= 992) {
    sideMenuCloseAction();
  }
})
// close side menu over 992px end

// owl carousel
$(document).ready(function () {
  $(".banner-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
  });
  $(".campuses-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 35,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0 : {
        items:1
    },
    768 : {
      items: 2
    },
    993 : {
      items: 3
    }
    }
  });
  $(".colab-carousel").owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0 : {
        items:2
    },
    576: {
      items: 3
    },
    768 : {
      items: 4
    },
    992 : {
      items: 4
    },
    1200 : {
      items: 5
    }
    }
  });
  $(".students-carousel").owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0 : {
        items:1
    },
    576: {
      items: 2
    },
    768 : {
      items: 3
    }
    }
  });
  $(".alumni-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
  });
});