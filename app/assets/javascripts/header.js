$(function(){
  $('.menuIcon').on('click',function(){
    $('.menuModal').fadeIn();
    $('.menuModalWrapper').fadeIn();
  });
  $('.closeIcon').on('click',function(){
    $('.menuModal').fadeOut();
    $('.menuModalWrapper').fadeOut();
  });
  $('dt').on('click',function(){
    $('dd').not($(this).next()).slideUp();
    $(this).next().slideToggle();
  });
});