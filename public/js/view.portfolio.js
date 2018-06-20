$(function() {
  //target active menu links
  if (
    window.location.pathname === "/portfolio" ||
    window.location.pathname === "/portfolio/multi-family" ||
    window.location.pathname === "/portfolio/net-lease"
  )
    $(".right.secondary.menu .item.portfolio").addClass("active");

  $("#lazy-container .lazy").Lazy({
    appendScroll: $("#lazy-container")
  });

  //path change
  $(".portfolio .dropdown").change(function(e, val) {
    var dropdownVal = $(this).val();
    if (dropdownVal === "all") {
      if (window.location.pathname !== "/portfolio") {
        window.location.href = "/portfolio";
      }
    }
    if (dropdownVal === "multi-family") {
      if (window.location.pathname !== "/portfolio/multi-family") {
        window.location.href = "/portfolio/multi-family";
      }
    }
    if (dropdownVal === "net-lease") {
      if (window.location.pathname !== "/portfolio/net-lease") {
        window.location.href = "/portfolio/net-lease";
      }
    }
  });

  //animate numbers
  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
    ","
  );

  $(".portfolio .countUp1").animateNumber(
    {
      number: 62,
      easing: "easeInQuad"
    },
    1500
  );

  $(".portfolio .countUp2").animateNumber(
    {
      number: 1629000000,
      easing: "easeInQuad",
      numberStep: comma_separator_number_step
    },
    1500
  );

  $(".portfolio .countUp3").animateNumber(
    {
      number: 41,
      easing: "easeInQuad"
    },
    1500
  );

  $(".portfolio .countUp4").animateNumber(
    {
      number: 498000000,
      easing: "easeInQuad",
      numberStep: comma_separator_number_step
    },
    1500
  );

  $(".portfolio .countUp5").animateNumber(
    {
      number: 103,
      easing: "easeInQuad",
      numberStep: comma_separator_number_step
    },
    1500
  );

  $(".portfolio .countUp6").animateNumber(
    {
      number: 2127000000,
      easing: "easeInQuad",
      numberStep: comma_separator_number_step
    },
    1500
  );
  //init wow.js
  new WOW().init();
  //modal open on button click
  $(document).on("click", ".huge.button", function(e) {
    var modalToOpen = "#" + $(this).data("modal");
    $(modalToOpen)
      .modal({
        inverted: true
      })
      .modal("show");
  });
  //modal open on title click
  $(document).on("click", ".large.header", function(e) {
    if ($(this).data("modal")) {
      var modalToOpen = "#" + $(this).data("modal");
      $(modalToOpen)
        .modal({
          inverted: true
        })
        .modal("show");
    }
  });
  //modal open on image click
  $(document).on("click", ".bordered.image", function(e) {
    var modalToOpen = "#" + $(this).data("modal");
    $(modalToOpen)
      .modal({
        inverted: true
      })
      .modal("show");
  });

  //modal close
  $(document).on("click", ".closeModal", function() {
    var modalToClose = "#" + $(this).data("modal");
    $(modalToClose).modal("hide all");
  });
});
