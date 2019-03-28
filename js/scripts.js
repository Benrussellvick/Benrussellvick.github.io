$(document).ready(function() {
  $("#homepage").fullpage({
    sectionsColor: ["", "#fff", "#efefef"],
    anchors: ["home", "about", "work", "contact"],
    slidesNavigation: true,
    offsetSections: true,
    css3: true,
    responsiveWidth: 500
  });

  //       if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  // 	$.fn.fullpage.destroy('all');
  // }
  $(window).scroll(function() {
    if (scroll >= 50) {
      //console.log('a');
      $(".nav").addClass(".white-bg");
    } else {
      //console.log('a');
      $(".nav").removeClass(".white-bg");
    }
  });

  $(".slide-item").each(function(i, obj) {
    var colors = ["#ffe474", "#e0a8a5", "#e0ebf0", "#dceae1"];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    $(this).css("background", random_color);
  });

  // Homepahe hero slider
  var time = 5;
  var $bar, $slick, isPause, tick, percentTime;

  $slick = $(".slick-slider");
  $slick.slick({
    draggable: true,
    speed: 1000,
    dots: false,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".prev"),
    nextArrow: $(".next")
  });

  $bar = $(".slider-progress .progress");

  $(".slick-slider-wrapper").on({
    mouseenter: function() {
      isPause = true;
    },
    mouseleave: function() {
      isPause = false;
    }
  });

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 0.1);
      $bar.css({
        width: percentTime + "%"
      });
      if (percentTime >= 100) {
        $slick.slick("slickNext");
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    $bar.css({
      width: 0 + "%"
    });
    clearTimeout(tick);
  }

  startProgressbar();
});
