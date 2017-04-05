$(function () {
//target active menu links
  if (window.location.pathname === '/' || window.location.pathname === '/home')
    $('.right.secondary.menu .item.home').addClass('active');

//init headhesive plugin
  var options = {
    offset: '#showHere',
    offsetSide: 'top',
    classes: {
      clone: 'headhesive--clone',
      stick: 'headhesive--stick',
      unstick: 'headhesive--unstick'
    }
  };
  var header  = new Headhesive('.secondary.menu', options);

  $(document).on('click', '.popupHelp', function() {
    $('.helpModal')
      .modal('show');
  });

  //modal close
  $(document).on('click', '.closeModal', function() {
    $('.helpModal')
      .modal('hide all');
  })
});
