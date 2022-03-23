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
    items: 4,
    margin:25,
    responsive:{
      0:{
        items:1
      },
      700:{
        items:2
      },
      1000:{
        items: 3,
      }
    },
   
  });

$(".certificateSlider").owlCarousel({
  nav: true,
  loop: false,
  dots: true,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  items: 4,
  margin:25,
  responsive:{
    0:{
      items:1
    },
    700:{
      items:2
    },
    1000:{
      items: 4,
    }
  }
});
$(".InstructorsSlider").owlCarousel({
  nav: true,
  loop: false,
  dots: true,
  items: 4,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  margin:70,
  responsive:{
    0:{
      items:1
    },
    700:{
      items:2
    },
    1000:{
      items: 4,
    },
   
  }
});
$(".partnerSlider").owlCarousel({
  nav: true,
  loop: false,
  dots: true,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  items: 6,
  margin:25,
  responsive:{
    0:{
      items:2
    },
    700:{
      items:4
    },
    1000:{
      items: 6,
    },
    
  },

});
$(".nav-slider").owlCarousel({
  nav: false,
  loop: false,
  dots: false,
  autoplay:true,
  items: 2

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

$(".langBtn").click(function(){
$(".langDropDown").toggle()
});

});


