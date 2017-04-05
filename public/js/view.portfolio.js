$(function () {
  //target active menu links
  if(window.location.pathname === '/portfolio' || window.location.pathname === '/portfolio/net-lease')
    $('.right.secondary.menu .item.portfolio').addClass('active');


  //path change
  $('.portfolio .dropdown').change(function(e, val) {
    var dropdownVal = $(this).val();
    switch (dropdownVal) {
      case 'multi-family':
        if(window.location.pathname === '/portfolio' || window.location.pathname === '/portfolio/multi-family')
          break;
        window.location.href='/portfolio';
      case 'net-lease':
        if(window.location.pathname === '/portfolio/net-lease')
          break;
        window.location.href='/portfolio/net-lease';
    }
  });


  //animate numbers
  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')

  $('.portfolio .countUp1').animateNumber({
      number: 54,
      easing: 'easeInQuad'
    },
    1500);

  $('.portfolio .countUp2').animateNumber({
      number: 251000000,
      easing: 'easeInQuad',
      numberStep: comma_separator_number_step
    },
    1500);

  $('.portfolio .countUp3').animateNumber({
      number: 36,
      easing: 'easeInQuad'
    },
    1500);

  $('.portfolio .countUp4').animateNumber({
      number: 132000000,
      easing: 'easeInQuad',
      numberStep: comma_separator_number_step
    },
    1500);

  //init wow.js
  new WOW().init();
  //modal open on button click
  $(document).on('click', '.huge.button', function(e) {
    var modalToOpen = '#' + $(this).data('modal');
    $(modalToOpen)
      .modal({
        inverted: true
      })
      .modal('show');
  });
//modal open on title click
  $(document).on('click', '.large.header', function(e) {
    if($(this).data('modal')) {
      var modalToOpen = '#' + $(this).data('modal');
      $(modalToOpen)
        .modal({
          inverted: true
        })
        .modal('show');
    }
  });
//modal open on image click
  $(document).on('click', '.bordered.image', function(e) {
    var modalToOpen = '#' + $(this).data('modal');
    $(modalToOpen)
      .modal({
        inverted: true
      })
      .modal('show');
  })

  //modal close
  $(document).on('click', '.closeModal', function() {
    var modalToClose = '#' + $(this).data('modal');
    $(modalToClose)
      .modal('hide all');
  })

});

