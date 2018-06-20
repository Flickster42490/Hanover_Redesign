$(function() {
  //target active menu links
  if (window.location.pathname === "/about")
    $(".right.secondary.menu .item.about").addClass("active");

  //animate bar
  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  function grow() {
    var element = ".bar";
    var i = 1;
    $(element).each(function(index, value) {
      setTimeout(function() {
        $(value)
          .css("max-width", "100%")
          .css("transition", "1s ease all");
      }, 500);
      i++;
    });
  }
  requestAnimationFrame(grow);

  //animate numbers
  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
    ","
  );

  $(".about .countUp1").animateNumber(
    {
      number: 103,
      easing: "easeInQuad"
    },
    1500
  );

  $(".about .countUp2").animateNumber(
    {
      number: 421000000,
      easing: "easeInQuad",
      numberStep: comma_separator_number_step
    },
    1500
  );

  $(".about .countUp3").animateNumber(
    {
      number: 2127000000,
      easing: "easeInQuad",
      numberStep: comma_separator_number_step
    },
    1500
  );
  //init wow.js
  new WOW().init();
});
