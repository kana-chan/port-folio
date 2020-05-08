$(function(){
// ================================================
  $('.top')
    .css('opacity','1')
    .css('transform','translateX(0)')
// ------------------------------------------------
  $(window).scroll(function(){
    $('.fadeIn,.slideIn').each(function(){
      let viewHeight = $(window).height();
      let scrollAmount = $(window).scrollTop();
      let contentPosition = $(this).offset().top;
      if(scrollAmount > contentPosition - viewHeight + 10){
        $(this).addClass('scrollIn');
      }
    })
  })
  // arrowBtnボタン================================================
  $('.arrowBtn').hover(
    function(){
      $(this).children().children('i')
        .animate({left:'150%'},300)
        .animate({left:'-50%'},0)
        .animate({left:'50%'},300)
    },function(){
      $(this).children().children('i')
        .animate({left:'150%'},300)
        .animate({left:'-50%'},0)
        .animate({left:'50%'},300)
    })
// ================================================
})