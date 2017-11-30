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
  var starList = $(".jsStarList");
  var stars = $(".jsStarItem");
  starList.on("click", ".jsStarItem", function() {
    console.log("click")
    var $this = $(this);
    stars.removeClass("selected");
    stars.removeClass("secondary");
    $this.addClass("selected");
    $this.prevAll().addClass("secondary");
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







