//Scrollify nav links code
$(function() {
    $.scrollify({
      section : ".scrollify",
    });
  });

  $('.nav-home').click(function(){
      $.scrollify.move('#panel1');
  });

  $('.nav-about').click(function(){
      $.scrollify.move('#panel2');
  });

  $('.nav-meow').click(function(){
      $.scrollify.move('#panel3');
  });

  $('.nav-contact').click(function(){
      $.scrollify.move('#4');
  });