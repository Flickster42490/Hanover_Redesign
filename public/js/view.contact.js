$(function() {
  //target active menu links
  if(window.location.pathname === '/contact')
    $('.right.secondary.menu .item.contact').addClass('active');

  //greyscale to map and back
  $('.contact .bordered.image').hover(function() {
    var mapImage = $(this).data('image');
    var greyscaleImage = $(this).attr('src');
    $(this).attr('src', mapImage);
    $(this).data('image', greyscaleImage);
  }, function() {
    var greyscaleImage = $(this).data('image');
    var mapImage = $(this).attr('src');
    $(this).attr('src', greyscaleImage);
    $(this).data('image', mapImage);
  });


});