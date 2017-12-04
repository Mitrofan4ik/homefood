//= js-assets/functions

$(document).ready(function() {

  var optionCategoriesSlider = {
    infinite: true,
    slidesToShow: 3,
    speed: 300,
    slidesToScroll: 1
  }
  var optionChefSlider = {
    slidesToShow: 4,
    variableWidth: true,
    unslick: true,
    dots: false,
    arrows: false,
    responsive: [
      {
       breakpoint: 1200,
       settings: {
         dots: true,
         infinite: false,
         unslick: false,
         slidesToShow: 3,
         variableWidth: true,
         slidesToScroll: 1
        }
      }
    ]
  }
  // var optionCustomerSlider = {
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   variableWidth: true,
  //   // unslick: true,
  //   dots: false,
  //   arrows: false,
  //   responsive: [
  //     {
  //      breakpoint: 1200,
  //      settings: {
  //        dots: true,
  //        infinite: false,
  //        unslick: false,
  //        slidesToShow: 3,
  //        variableWidth: true,
  //        slidesToScroll: 1
  //       }
  //     }
  //   ]
  // }

  $(".jsCategories").slick(optionCategoriesSlider);
  $(".jsChefBox").slick(optionChefSlider);  
  // $(".jsCustomer").slick();

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
});


// $(window).resize(function() {

// });
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








