function adaptFontSize(){for(;$(".card-title h5").height()>$(".card-title").height();)$(".card-title h5").css("font-size",parseInt($(".card-title h5").css("font-size"))-1+"px")}function adjustNavbar(){"use strict";$("body").scrollspy({offset:56,target:"#mainNav"});var a=function(){$("#mainNav").offset().top>100?$("#mainNav").addClass("navbar-shrink"):$("#mainNav").removeClass("navbar-shrink")};a(),$(window).scroll(a)}function scrollTop(){window.scroll({behavior:"smooth",top:0})}$(document).ready(function(){adjustNavbar()});