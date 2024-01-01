(function ($) {
  "use strict";

  // menu
  // menu
  $(".hamburger-menu ,.navClose").click(function () {
    $(".navMobile_content").toggleClass("active");
  });

  // Functionality to change input width when nav_search_btn is clicked
  $(".nav__search").click(function () {
    var initialWidth = "54px";
    var newWidth = "150px";
    if ($(".nav__search input").css("width") === initialWidth) {
      $(".nav__search input").css("width", newWidth);
    } else {
      $(".nav__search input").css("width", initialWidth);
    }

    $(".nav__search").toggleClass('active');
  });

  // owlCarousel
  // $(".brand-active").owlCarousel({
  //   loop: true,
  //   margin: 30,
  //   items: 6,
  //   navText: [
  //     '<i class="fa fa-angle-left"></i>',
  //     '<i class="fa fa-angle-right"></i>'
  //   ],
  //   nav: false,
  //   dots: false,
  //   responsive: {
  //     0: {
  //       items: 2
  //     },
  //     767: {
  //       items: 3
  //     },
  //     992: {
  //       items: 6
  //     }
  //   }
  // });
})(jQuery);
