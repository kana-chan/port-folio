$(function(){
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
})