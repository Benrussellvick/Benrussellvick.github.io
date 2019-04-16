$(".logo").addClass("logo-play");

$(".logo").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function() {
  $(this).removeClass("logo-play");
});

$(".logo").hover(function() {
  $(this).addClass("logo-play");
});

console.log("js");
