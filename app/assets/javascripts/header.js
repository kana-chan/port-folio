$(function(){
  $('.menuIcon').on('click',function(){
    $('.menuModal').fadeIn();
    $('.menuModalWrapper').fadeIn();
  });
  $('.closeIcon').on('click',function(){
    $('.menuModal').fadeOut();
    $('.menuModalWrapper').fadeOut();
  });
});