$(document).ready(function() {
  adjustNavbar();
});

function adaptFontSize() {
    while ($(".card-title h5").height() > $(".card-title").height()) {
      $(".card-title h5").css("font-size", (parseInt($(".card-title h5").css("font-size")) - 1) + "px" );
    }
}

function adjustNavbar() {
  "use strict";

  $("body").scrollspy({
    offset: 56,
    target: "#mainNav",
  });
  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
}
