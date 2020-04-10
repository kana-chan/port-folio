$(function(){
  if(window.location.href.match(/\/$/)) {
// ================================================
  $.when(
    $('.top__nameBox').fadeIn(3000)
  ).done(function(){
    $('.main').show();
  });
// ================================================
  }
});