$(document).ready(function() {
  $('#introduction button').click(function() {
    $('#introduction').fadeOut('slow', function() {
      $('#landing .title').fadeTo('slow', 1);
    });
  });

  $('a[href*="#"').click(function(event) {
    var target = $(this.hash);
    event.preventDefault();
    $('html, body').animate(
      {
        scrollTop: target.offset().top - 50
      },
      1000
    );
  });
});
