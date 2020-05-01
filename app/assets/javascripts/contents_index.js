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
  $('.prev').hide();
  
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
      if(index==1){
        $(this).hide()
      }else if(index==3){
        $('.next').show();
      }
    }else{
      // 丸の切り替え------------------------------------------------
      nowActive.next().addClass('active');
      // 見出しの切り替え------------------------------------------------
      $('.profile__main__textHeader').children().eq(index).next().fadeIn();
      $('.profile__main__lowerBox').children().eq(index).next().fadeIn();
      if(index==2){
        $(this).hide()
      }else if(index==0){
        $('.prev').show();
      }
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
// otherBlock ホバーでname表示------------------------------------------------
    $('.skills__main__otherBlock__contentBox__content').hover(
      function(){
        $(this).children('.skills__main__otherBlock__contentBox__content--name').fadeIn();
      },
      function(){
        $(this).children('.skills__main__otherBlock__contentBox__content--name').fadeOut();
      })
// lowerBlock ホバー- -----------------------------------------------
      $('.skills__main__lowerBlock__content').hover(
        function(){
          $(this).children('.skills__main__lowerBlock__content--leftCircle').animate({width:'1.5vh',height:'1.5vh'});
          $(this).find('i')
            .animate({left:'150%'},300)
            .animate({left:'-50%'},0)
            .animate({left:'50%'},300)
        },
        function(){
          $(this).children('.skills__main__lowerBlock__content--leftCircle').animate({width:'0.5vh',height:'0.5vh'});
        })
// skillIcon click横からlowerBlock表示------------------------------------------------
      $('.skills__main__upperBlock__contentBox--icon').on('click',function(){
        var index = $(this).parents().index();
        if($(this).hasClass('active')){
        }else{
          $('.skills__main__upperBlock__contentBox--icon').removeClass('active');
          $(this).addClass('active')
          $('.skills__main__lowerBlock').animate({left:'140%'})
          $('.skills__main__lowerBlock').eq(index).animate({left:'68%'})
        }
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