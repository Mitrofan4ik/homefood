//= js-assets/functions

$(document).ready(function() {
  
  var optionCategoriesSlider = {
    pageDots: true,
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

  $(".jsLikeHeard").on("click", function () {
    $(this).toggleClass("active");
  });
  showFilter();
  checkboxAccordion();

});

function responsiveSlider() {
  // Customer slider
  var optionCustomersSlider = {
    pageDots: false,
    contain: false,
    freeScroll: true,
    initialIndex: 3,
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
}


$(window).resize(function() {
  // Customer slider
  responsiveSlider();
  showFilter();
  checkboxAccordion();
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

var numberSpinner = (function() {
  $('.number-spinner>a').click(function() {
    var btn = $(this),
      oldValue = btn.closest('.number-spinner').find('input').val().trim(),
      newVal = 0;

    if (btn.attr('data-dir') === 'up') {
      newVal = parseInt(oldValue) + 1;
    } else {
      if (oldValue > 1) {
        newVal = parseInt(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
  });
  $('.number-spinner>input').keypress(function(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  });
})();

function showFilter() {
   var windowWidth = $(window).width();
   if (windowWidth <= 1175) {
     $(".jsFilter").on("click", function() {
       $(".double-content__left").toggleClass("show-filter");
     });
   } else if (windowWidth >= 1175) {
     $(".double-content__left").removeClass("show-filter");
   }
}

function checkboxAccordion() {
  var windowWidth = $(window).width();
  if (windowWidth <= 1175) {
    $(".checkbox-open").on("click", function() {
      console.log("click");
      $(this).parent().siblings().slideToggle();
    });
  } 
}



