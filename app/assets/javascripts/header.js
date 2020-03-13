$(function(){
  $('.menuIcon').on('click',function(){
    $('.menuModal').fadeIn();
  });
  $('.closeIcon').on('click',function(){
    $('.menuModal').fadeOut();
  });
});