//Scrollify nav links code
$(function() {
    $.scrollify({
      section : ".scrollify",
    });
  });

  $('.nav-home').click(function(){
      $.scrollify.move('#home');
  });

  $('.nav-about').click(function(){
      $.scrollify.move('#about');
  });

  $('.nav-meow').click(function(){
      $.scrollify.move('#meow');
  });

  $('.nav-contact').click(function(){
      $.scrollify.move('#4');
  });

$(".navbar-nav .nav-link").on("click", function(){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
});