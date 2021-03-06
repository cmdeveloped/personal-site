$(document).ready(function() {
  var $doc = $('html, body');
  var $scroll1 = $('#scrollOne.learnMore');
  var $scroll2 = $('#scrollTwo.learnMore');
  var $scroll3 = $('#scrollThree.learnMore');
  var $scroll4 = $('#scrollFour.learnMore');
  var $findID = $('#findOut');
  var $findClass = $('.findOut');
  var $gFit = $('.goodFit');
  var $btn = $('.goodFit > .prompt > ul > a');

  // Scroll to Info Section
  $scroll1.click(function() {
    $doc.animate({
    scrollTop: $('#info').offset().top
    }, 2000);
  });

  $scroll2.click(function() {
    $doc.animate({
      scrollTop: $('#concept').offset().top
    }, 2000);
  });

  $scroll3.click(function() {
    $doc.animate({
      scrollTop: $('#create').offset().top
    }, 2000);
  });

  $scroll4.click(function() {
    $doc.animate({
      scrollTop: $('#confidence').offset().top
    }, 2000);
  });

  $findID.click(function() {
    $findClass.slideDown();
    $findID.fadeOut();
  });

  $(window).scroll(function() {
   if ($(window).scrollTop() + $(window).height() == $(document).height()) {
       $gFit.delay(30000).fadeIn(2000);
   }
  });

  $gFit.click(function() {
    $gFit.fadeOut(100);
  });

  $btn.click(function() {
    $gFit.fadeOut(500, easing='swing');
  });

});
