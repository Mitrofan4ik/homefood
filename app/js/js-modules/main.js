//= js-assets/functions

$(document).ready(function() {

  var option1 = {
    infinite: true,
    slidesToShow: 3,
    speed: 300,
    slidesToScroll: 1
  }

  $(".jsCategories").slick(option1);

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

 $(".jsChefBox").slick({
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
  });  
});

$(window).resize(function() {

});







