jQuery(function ($) {
  $(".heroSlider").owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    items: 1

  });
  $(".coursesSlider").owlCarousel({
    nav: true,
    loop: false,
    dots: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
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

$(".certificateSlider").owlCarousel({
  nav: true,
  loop: false,
  dots: true,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  items: 4,
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
$(".InstructorsSlider").owlCarousel({
  nav: true,
  loop: false,
  dots: true,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  items: 4,
  margin:70,
  respnsive:{
    0:{
      items:1
    },
    6:{
      items:2
    }
  }
});
$(".partnerSlider").owlCarousel({
  nav: true,
  loop: false,
  dots: true,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  items: 6,
  margin:25,
  respnsive:{
    0:{
      items:3
    },
    6:{
      items:4
    }
  }
});
$(window).scroll(function () {
  scrollTop = $(window).scrollTop();
  if(scrollTop > 1000){
    $(".up").css("opacity","1")
  }
  else {
    $(".up").css("opacity","0")

  }
  $(".up").on("click",function(){$("html, body").animate({scrollTop:0},"slow");return false;});

});


});


