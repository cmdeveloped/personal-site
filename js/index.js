$(document).ready(function() {

  // Scroll to Info Section
  $('#scrollOne.learnMore').click(function() {
    $('html, body').animate({
    scrollTop: $('#info').offset().top
    }, 2000);
  });

  $('#scrollTwo.learnMore').click(function() {
    $('html, body').animate({
      scrollTop: $('#concept').offset().top
    }, 2000);
  });

  $('#scrollThree.learnMore').click(function() {
    $('html, body').animate({
      scrollTop: $('#create').offset().top
    }, 2000);
  });

  $('#scrollFour.learnMore').click(function() {
    $('html, body').animate({
      scrollTop: $('#confidence').offset().top
    }, 2000);
  });
});
