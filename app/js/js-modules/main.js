//= js-assets/functions

$(document).ready(function() {

  var option1 = {
    infinite: true,
    slidesToShow: 3,
    speed: 300,
    slidesToScroll: 1
  }

  $(".jsCategories").slick(option1);



  $(".jsChefBox").slick('unslick');

  // rating stars
  var starList = $(".jsStarLIst");
  var stars = $(".jsStarItem");
  starList.on("click", ".jsStarItem", function() {
    var $this = $(this);
    stars.removeClass("selected");
    stars.removeClass("secondary");
    $this.addClass("selected");
    $this.prevAll().addClass("secondary");
  });

  chefSlider();
});

$(window).resize(function() {
  chefSlider();
});

function chefSlider() {
  var windowWidth = $(window).width();
  var chefBox = $(".chef-box");
  if (windowWidth <= 1200) {
    chefBox.addClass("jsChefBox");
    $(".jsChefBox").slick({
       slidesToShow: 4,
    });
  } else {
    chefBox.removeClass("jsChefBox");
    $(".jsChefBox").slick("unslick");
  }
}







