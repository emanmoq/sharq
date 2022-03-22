jQuery(function ($) {
  $(".heroSlider").owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    items: 1

  });
  $(".coursesSlider").owlCarousel({
    nav: true,
    loop: true,
    dots: false,
    items: 3,
    margin:25,
    respnsive:{
      0:{
        items:1
      },
      6:{
        items:2
      }
    }
  });
});


