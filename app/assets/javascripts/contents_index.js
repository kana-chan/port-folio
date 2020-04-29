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
// profile================================================
// 初期値------------------------------------------------
  $('.profile__main__textHeader').children().eq(0).show();
  $('.profile__main__circleBox--circle').eq(0).addClass('active');
  $('.profile__main__lowerBox__wrapper').eq(0).show();
  
// btnの矢印アニメ------------------------------------------------
  $('.profile__main__btn').on('mouseenter',function(){
    if ($(this).hasClass('prev')){
      $(this).children('i')
        .animate({left:'-50%'},300)
        .animate({left:'150%'},0)
        .animate({left:'50%'},300)
    }else{
      $(this).children('i')
        .animate({left:'150%'},300)
        .animate({left:'-50%'},0)
        .animate({left:'50%'},300)}
  })
// 矢印を押したら、画面が切り替わる------------------------------------------------
  $('.profile__main__btn').on('click',function(){
    var nowActive = $('.profile__main__circleBox--circle.active');
    var index = nowActive.index();
    nowActive.removeClass('active');
    $('.profile__main__textHeader').children().hide();
    $('.profile__main__lowerBox').children().hide();

    if ($(this).hasClass('prev')){
      // 丸の切り替え------------------------------------------------
      nowActive.prev().addClass('active');
      // 見出しの切り替え------------------------------------------------
      $('.profile__main__textHeader').children().eq(index).prev().fadeIn();
      $('.profile__main__lowerBox').children().eq(index).prev().fadeIn();
    }else{
      // 丸の切り替え------------------------------------------------
      nowActive.next().addClass('active');
      // 見出しの切り替え------------------------------------------------
      $('.profile__main__textHeader').children().eq(index).next().fadeIn();
      $('.profile__main__lowerBox').children().eq(index).next().fadeIn();
    }
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