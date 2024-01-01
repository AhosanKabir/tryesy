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
  $(".client__carousel").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    nav: false,
    dots: true
  });
})(jQuery);
