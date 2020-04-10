$(function(){
  if (window.location.href.match(/profiles$/)) {
  // ================================================
  $.when(
    $('.top__profile').fadeIn(3000)
  ).done(function(){
    $('.top__photo').fadeIn(3000)
    $('.top__text').fadeIn(3000)
    $('.top__profile').fadeOut(3000)
    $('.main').show()
  });
  // ================================================
  }
});