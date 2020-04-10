$(function(){
  if(window.location.href.match(/\/$/)) {
// ================================================
  $.when(
    $('.top__nameBox').fadeIn(6000)
  ).done(function(){
    $('.main').show();
  });
// ================================================
  }
});