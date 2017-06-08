$(document).ready(function() {
  $('.learnMore').click(function() {
    $('html, body').animate({
    scrollTop: $('#info').offset().top
    }, 2000);
  })
})
