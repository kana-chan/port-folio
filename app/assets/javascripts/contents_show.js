$(function(){
  if (window.location.href.match(/\/contents\/\d+$/)) {
    $('.ditail__main__lowerBlock__contentBox').on('click',function(){
      let terget = $(this);
      let notTerget = $('.ditail__main__lowerBlock__contentBox').not(terget);
      if(terget.hasClass('active')){
        $('.ditail__main__lowerBlock__contentBox')
          .removeClass('active')
          .animate({width:'25vh',height:'25vh'})
          .css('backgroundColor','white')
        $('.ditail__main__lowerBlock__contentBox').children('h3').show()
        $('.ditail__main__lowerBlock__contentBox').children('.ditail__main__lowerBlock__contentBox--image')
          .animate({width:'23vh',height:'23vh'})
        $('.ditail__main__lowerBlock__contentBox').children('.ditail__main__lowerBlock__contentBox__textBox').animate({right:'50%'})
        $('.ditail__main__lowerBlock__contentBox').children().children().children('h3,p').hide();
      }else{
        terget
          .addClass('active')
          .animate({width:'85vh',height:'35vh'})
          .css('backgroundColor','rgb(224, 68, 60)')
        terget.children('h3').hide()
        terget.children('.ditail__main__lowerBlock__contentBox--image')
          .animate({width:'55vh',height:'33vh'})
        terget.children('.ditail__main__lowerBlock__contentBox__textBox').animate({right:'3%'})
        terget.children().children().children('h3,p').fadeIn(1300);

        notTerget
          .removeClass('active')
          .animate({width:'15vh',height:'15vh'})
          .css('backgroundColor','white')
        notTerget.children('h3').show()
        notTerget.children('.ditail__main__lowerBlock__contentBox--image').animate({width:'13vh',height:'13vh'})
        notTerget.children('.ditail__main__lowerBlock__contentBox__textBox').animate({right:'50%'})
        notTerget.children().children().children('h3,p').hide();
      }
    })
// ------------------------------------------------
  }
});