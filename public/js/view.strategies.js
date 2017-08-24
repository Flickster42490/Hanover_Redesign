$(function() {
  //target active menu links
  if(window.location.pathname === '/strategies')
    $('.right.secondary.menu .item.strategies').addClass('active');
  //target dropdown mobile menu
  $('.strategies .dropdown').change(function(e, val) {
    var dropdownVal = $(this).val();
    if(dropdownVal ===  'multi-family') {
      $('.striped.table.net-lease').css('display','none');
      $('.striped.table.net-lease-gp').css('display','none');
      $('.striped.table.multi-family-gp').css('display','none');
      $('.striped.table.multi-family').css('display','table');
    }
    if(dropdownVal ===  'multi-family-gp') {
      $('.striped.table.net-lease').css('display','none');
      $('.striped.table.net-lease-gp').css('display','none');
      $('.striped.table.multi-family').css('display','none');
      $('.striped.table.multi-family-gp').css('display','table');
    }
    if(dropdownVal ===  'net-lease') {
      $('.striped.table.multi-family').css('display','none');
      $('.striped.table.multi-family-gp').css('display','none');
      $('.striped.table.net-lease-gp').css('display','none');
      $('.striped.table.net-lease').css('display','table');
    }
    if(dropdownVal ===  'net-lease-gp') {
      $('.striped.table.multi-family').css('display','none');
      $('.striped.table.multi-family-gp').css('display','none');
      $('.striped.table.net-lease').css('display','none');
      $('.striped.table.net-lease-gp').css('display','table');
    }
  });

  //target tabular menu
  $(document).on('click', '.net-lease', function() {
    if(!$('.item.net-lease').hasClass('active')){
      $('.item.multi-family').removeClass('active');
      $('.item.multi-family-gp').removeClass('active');
      $('.item.net-lease-gp').removeClass('active');
      $('.item.net-lease').addClass('active');

      $('.striped.table.multi-family').css('display','none');
      $('.striped.table.multi-family-gp').css('display','none');
      $('.striped.table.net-lease-gp').css('display','none');
      $('.striped.table.net-lease').css('display','table');
    }
  });

  $(document).on('click', '.net-lease-gp', function() {
    if(!$('.item.net-lease-gp').hasClass('active')){
      $('.item.multi-family').removeClass('active');
      $('.item.multi-family-gp').removeClass('active');
      $('.item.net-lease').removeClass('active');
      $('.item.net-lease-gp').addClass('active');

      $('.striped.table.multi-family').css('display','none');
      $('.striped.table.multi-family-gp').css('display','none');
      $('.striped.table.net-lease').css('display','none');
      $('.striped.table.net-lease-gp').css('display','table');
    }
  });

  $(document).on('click', '.multi-family', function() {
    if(!$('.item.multi-family').hasClass('active')) {
      $('.item.net-lease').removeClass('active');
      $('.item.multi-family-gp').removeClass('active');
      $('.item.net-lease-gp').removeClass('active');
      $('.item.multi-family').addClass('active');

      $('.striped.table.net-lease').css('display','none');
      $('.striped.table.net-lease-gp').css('display','none');
      $('.striped.table.multi-family-gp').css('display','none');
      $('.striped.table.multi-family').css('display','table');

    }
  });

  $(document).on('click', '.multi-family-gp', function() {
    if(!$('.item.multi-family-gp').hasClass('active')) {
      $('.item.net-lease').removeClass('active');
      $('.item.multi-family').removeClass('active');
      $('.item.net-lease-gp').removeClass('active');
      $('.item.multi-family-gp').addClass('active');

      $('.striped.table.net-lease').css('display','none');
      $('.striped.table.net-lease-gp').css('display','none');
      $('.striped.table.multi-family').css('display','none');
      $('.striped.table.multi-family-gp').css('display','table');

    }
  });

});