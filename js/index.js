$(document).ready(function() {
  var $doc = $('html, body');
  var $scroll1 = $('#scrollOne.learnMore');
  var $scroll2 = $('#scrollTwo.learnMore');
  var $scroll3 = $('#scrollThree.learnMore');
  var $scroll4 = $('#scrollFour.learnMore');
  var $findID = $('#findOut');
  var $findClass = $('.findOut');
  var $prompt = $('.goodFit');
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
   if ((navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) || $(window).scrollTop() + $(window).height() == $(document).height()) {
       $doc.delay(6000).animate({scrollTop: 0}, 2000, easing='swing');
       $prompt.delay(6000).fadeIn(2000);
   }
  });

  $btn.click(function() {
    console.log('worked');
    $prompt.fadeOut(500, easing='swing');
    $(window).location.reload(true);
  });

});
