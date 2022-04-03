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
    margin: 25,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 3,
      }
    },

  });
  $(".intersetcoursesSlider").owlCarousel({
    nav: false,
    loop: false,
    dots: false,
    autoplay:true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    items: 4,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
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
    margin: 25,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
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
    margin: 70,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
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
    margin: 25,
    responsive: {
      0: {
        items: 2
      },
      700: {
        items: 4
      },
      1000: {
        items: 6,
      },

    },

  });
  $(".instructorSlider").owlCarousel({
    nav: false,
    loop: false,
    dots: false,
    items: 3,
    margin: 25,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 3,
      },

    },

  });
  $(".nav-slider").owlCarousel({
    nav: false,
    loop: false,
    dots: false,
    autoplay: true,
    items: 2

  });
  
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop > 1000) {
      $(".up").css("opacity", "1")
    }
    else if (scrollTop < 1000)  {
      $(".up").css("opacity", "0")

    }
    if (scrollTop > $("header").height()-10){
      $(".courseDetailsBody .innerHeader").addClass("removeHeader");
      $(".courseDetailsBody .scrolableHeader").css("display","flex")
      $(".courseDetailsBody .mainHeader").addClass("removeHeader");
      $(".courseDetailsBody .coursesTabsSection").addClass("scrollNav");
      $(".videoSec").addClass("scrollVideo");
      
    }
    else{
      $(".courseDetailsBody  .innerHeader").removeClass("removeHeader");
      $(".courseDetailsBody .mainHeader").removeClass("removeHeader");
      $(".courseDetailsBody .coursesTabsSection").removeClass("scrollNav");
      $(".courseDetailsBody .scrolableHeader").css("display","none");
      $(".videoSec").removeClass("scrollVideo");

    }

    function onScroll(event){
      var scrollPosition = $(document).scrollTop();
    $('.courseDetailsBody .coursepage-tabs .nav-link').each(function () {
      console.log($(this).attr('href')); 
      var refElement = $(this).attr("href");
    //   console.log($(this).attr("href")); //log
      if (refElement.length() && refElement.position().top-100 <= scrollPosition) {
      $('.courseDetailsBody .coursepage-tabs .nav-link').removeClass("active");
      $(this).addClass("active");
      }
      else if( $(document).scrollTop() <= 100){
        $('.courseDetailsBody .coursepage-tabs .nav-link').removeClass("active");
      }
      else{
      $(this).removeClass("active"); 
    
      }
    });
  }
  $(document).on("scroll", onScroll);
        // alert(scrollTop);
    $(".up").on("click", function () { $("html, body").animate({ scrollTop: 0 }, "slow"); return false; }); 
  });

  $(".langBtn").click(function () {
    $(".langDropDown").toggle()
  });
  $(".showHidePass").click(function () {

    var x = $(this).closest(".form-group").find(".form-control");
    if (x.attr("type") == "text") {
      x.attr("type", "password");
      $(this).closest(".form-group").find(".showPass").css("display", "block");
      $(this).closest(".form-group").find(".hidePass").css("display", "none");
    }
    else {
      x.attr("type", "text");
      $(this).closest(".form-group").find(".hidePass").css("display", "block");
      $(this).closest(".form-group").find(".showPass").css("display", "none");
    }
  });
  $(".datepicker").datepicker();
  $(document).on('click', '.dropdown-menu a', function (e) {
    e.stopPropagation();
  });
  // make it as accordion for smaller screens

    $('.dropdown-menu a').click(function(e){

      e.preventDefault();
        if($(this).next('.submenu').length){
          $(this).addClass("active")
          $('.submenu').hide();
          $(this).next('.submenu').css("display","block");
        }
        $('.dropdown').on('hide.bs.dropdown', function () {
       $(this).find('.submenu').hide();
    })
    });

    $(".filterSearch").on("keyup", function() {

      var value = $(this).val().toLowerCase();
     $(this).parent(".dropdown-menu").find("li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

    /**************FAQ Collapse */
    $('.accordion-panel').click(function () {
      $(this).not(this).find('span:first').removeClass('lni-chevron-up').addClass('lni-chevron-down');
      $(this).find('span:first').toggleClass('lni lni-chevron-up lni lni-chevron-down');
  })
  $(".CurriculumLink").click(function(){
    $(this).not(this).find('span:first').removeClass('lni-chevron-down').addClass('lni-chevron-up');
    $(this).find('span:first').toggleClass('lni lni-chevron-down lni lni-chevron-up');
  })
  $('.faqHeader').click(function () {
    $(this).parent().find('.faqbody').slideToggle(400);
});
$(".faqHeader").on("click", "a", function(e) { e.preventDefault() });

  $('.CurriculumLink').click(function () {
      $(this).parent().find('.innerCurriculumList').slideToggle(400);
  });
  $(".CurriculumLink").on("click", "a", function(e) { e.preventDefault() });
  $(".radioBtnContainer").on("click", "a", function(e) { e.preventDefault() });
  
  $(".readOnlyRating").starRating({
    starSize: 16,
    activeColor: '#FFD93F',
    hoverColor: '#FFD93F',
    ratedColor: '#FFD93F',
    emptyColor: 'transparent',
    starShape: 'straight',
    strokeColor:'#FFD93F',
    strokeWidth:9,
    ratedColors: '#FFD93F',
    useGradient: false,
    readOnly: true,
    callback: function (currentRating, $el) {
      // make a server call here
    }
  });
  $(".lectureReviewsReadOnly").starRating({
    starSize: 16,
    activeColor: '#FFD93F',
    hoverColor: '#FFD93F',
    ratedColor: '#FFD93F',
    emptyColor: 'transparent',
    starShape: 'straight',
    strokeColor:'#FFD93F',
    strokeWidth:9,
    ratedColors: '#FFD93F',
    useGradient: false,
    readOnly: true,
    callback: function (currentRating, $el) {
      // make a server call here
    }
  });
  $(".learnerReviewsReadOnly").starRating({
    starSize: 16,
    rtl: true,
    activeColor: '#FFB13E',
    hoverColor: '#FFB13E',
    ratedColor: '#FFB13E',
    emptyColor: 'transparent',
    starShape: 'straight',
    strokeColor:'#FFB13E',
    strokeWidth:9,
    ratedColors: '#FFD93F',
    useGradient: false,
    readOnly: true,
    callback: function (currentRating, $el) {
      // make a server call here
    }
  });
  $(".leaveReviewRating").starRating({
    starSize: 16,
    activeColor: '#FFB13E',
    hoverColor: '#FFB13E',
    ratedColor: '#FFB13E',
    emptyColor: 'transparent',
    starShape: 'straight',
    strokeColor:'#FFB13E',
    strokeWidth:9,
    ratedColors: '#FFD93F',
    useGradient: false,
    disableAfterRate:true,
    useFullStars: true,

    callback: function (currentRating, $el) {
      // make a server call here
    }
  });
});


