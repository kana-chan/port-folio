$(function(){
  if(window.location.href.match(/\/$/)) {
// topテキストのアニメーション================================================
  $.when(
    $('.underLine').each(function(i){
      $(this).delay(100*i).animate({width:'100%'},300)
    })
  ).done(function(){
    $(this).prev('h1').css('color','black')
    $('.underLine').animate({height:'5%'},300)
  })

// contents================================================
  $('.works__contentsBox__photoBlock').hover(
    function(){
      $(this).children('img')
        .animate({width:'102%',height:'102%'})
        .css('filter','blur(2px)')
      $(this).children('.filter')
        .fadeIn();
    },
    function(){
      $(this).children('img')
        .animate({width:'100%',height:'100%'})
        .css('filter','blur(0)')
      $(this).children('.filter')
        .fadeOut();
    });
// filer------------------------------------------------
    $('.filter').on('click',function(){
      var $terget = $(this).parents().siblings('.works__contentsBox__textBlock')
      if ($terget.hasClass('open')){
        $terget
          .removeClass('open')
          .slideUp(300);
      }else{
        $terget
          .addClass('open')
          .slideDown(300)
          .css('display','flex');
      }
    });
// skills================================================
    $('.skills__wrapper__left__category').on('click',function(){
      var index = $(this).index();
      $.when(
        $('.skillsUnderLine')
          .animate({width:'100%'},300)
      ).done(function(){
        $('.skills__wrapper__right').css('backgroundColor','lightGray')
        $('.skills__wrapper__right__info')
          .hide()
          .eq(index).show()
        $('.skillsUnderLine')
          .animate({height:'0'},300)
          .animate({width:'0',height:'100%'},0)
      })
    })
// show moreボタン------------------------------------------------
  $('.linkBtn').hover(
    function(){
      $(this).children().children()
        .animate({right:'-100%'},300)
        .animate({right:'100%'},0)
        .animate({right:'30%'},300)
    },
      function(){});
// ================================================
  }
});