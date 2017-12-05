//= js-assets/functions

$(document).ready(function() {
  
  var optionCategoriesSlider = {
    pageDots: false,
    initialIndex: 2,
    contain: true,
    freeScroll: true,
    cellSelector: ".categories-slider__slide"
  }
  

  $(".jsCategories").flickity(optionCategoriesSlider);

  // rating stars
  $(".jsStarItem input").on("click", function(e) {
    var $this = $(this);
    var starContainer = $this.closest('.jsStarList');        
    var curentLi = $this.closest('.jsStarItem');

    starContainer.find('li').removeClass('selected').removeClass('secondary');      
    curentLi.addClass('selected');
    curentLi.prevAll().addClass("secondary");
  });
  
  // hover on chief - card
  $( ".jsChefCard" ).hover(function() {
    $( this ).find( ".jsHidenInfo" ).fadeToggle("fast");
  })

  $(".hamburger-menu").on("click", function() {
    $(".bar").toggleClass("animate");
    $(".jsOpenMobileMenu").toggleClass("open-menu");
  });
  // Customer slider
  responsiveSlider();
});

function responsiveSlider() {
  // Customer slider
  var optionCustomersSlider = {
    pageDots: false,
    contain: true,
    freeScroll: true,
    initialIndex: 2,
    cellSelector: ".customers-item"
  };

  var windowWidth = $(window).width();
  var $carousel = $(".jsCustomer").flickity();
  var isFlickity = true;

  if (windowWidth >= 1200 && isFlickity) {
    $carousel.flickity("destroy");
  } else {
    $carousel.flickity(optionCustomersSlider);
  }

  isFlickity = !isFlickity;

  var optionChefSlider = {
    pageDots: false,
    contain: true,
    freeScroll: true,
    initialIndex: 2,
    cellSelector: ".chef-card"
  };

  var $carouselChief = $(".jsChefSlider").flickity();
  var isFlickityChief = true;

  if (windowWidth >= 1200 && isFlickity) {
    $carouselChief.flickity("destroy");
  } else {
    $carouselChief.flickity(optionChefSlider);
  }

  isFlickityChief = !isFlickity;

}

$(window).resize(function() {
  // Customer slider
  responsiveSlider();
});

//Animated header
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    var windowWidth = $(window).width();
    if (scroll >= 50 && windowWidth >= 1570) {
      $('#header').addClass('fixed');
    } else {
      $('#header').removeClass('fixed');
    }
});








