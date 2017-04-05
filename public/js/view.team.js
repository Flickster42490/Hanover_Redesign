$(function() {
  //target active menu links
  if(window.location.pathname === '/team')
    $('.right.secondary.menu .item.team').addClass('active');

  //greyscale to color and back
  $('.team .bordered.image').hover(function() {
    var colorImage = $(this).data('image');
    var greyscaleImage = $(this).attr('src');
    $(this).attr('src', colorImage);
    $(this).data('image', greyscaleImage);
  }, function() {
    var greyscaleImage = $(this).data('image');
    var colorImage = $(this).attr('src');
    $(this).attr('src', greyscaleImage);
    $(this).data('image', colorImage);
  })

  //modal open
  $('.team .bordered.image').click(function() {
    var modalToOpen = '#' + $(this).attr('id') + '-modal';
    $(modalToOpen)
      .modal({
        inverted: true
      })
      .modal('show');
  });

  //modal close
  $(document).on('click', '.closeModal', function() {
    var modalToClose = '#' + $(this).data('modal');
    $(modalToClose)
      .modal('hide all');
  })

});