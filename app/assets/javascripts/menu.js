$(function(){
// menubtnをおすと変形================================================
  $('.menuBtn').on('click',function(){
    $(this).toggleClass('active')
    if ($(this).hasClass('active')){
      $('.menuBtn--topBar')
        .css('top','50%')
        .css('transform','rotate(225deg)')
      $('.menuBtn--underBar')
        .css('top','50%')
        .css('transform','rotate(-225deg)')
      $('.menuBtn--centerBar')
        .css('transform','rotate(135deg)')
      $('.menuModal').animate({right:'0'})
    }else{
      $('.menuBtn--topBar')
        .css('transform','rotate(0)')
        .css('top','20%')
      $('.menuBtn--underBar')
        .css('top','80%')
        .css('transform','rotate(0)')
      $('.menuBtn--centerBar')
        .css('transform','rotate(0)')
      $('.menuModal').animate({right:'-50vw'})
      $('.menuModal').children('ul')
        .removeClass('active')
      $('.menuModal').children('ul').children('li')
        .stop().slideUp()
      $('.menuModal').children('ul').children('i')
        .css('transform','rotate(0deg)')
    }
// 各項目をクリックで、ジャンプ------------------------------------------------
// pulldownメニュー------------------------------------------------
    $('.menuModal').children().children('h3').on('click',function(){
      $(this).siblings('li').stop().slideToggle(200)
      $(this).parents('ul').toggleClass('active')
      if($(this).parents('ul').hasClass('active')){
        $(this).siblings('i').css('transform','rotate(180deg)')
      }else{
        $(this).siblings('i').css('transform','rotate(0deg)')
      }
    })
//profileの表示切り替え・ジャンプ ------------------------------------------------
    $('.menuModal__profile--list').on('click',function(){
      var position = $('.profile__heading').offset().top -30;
      var index = $('.menuModal__profile--list').index(this);
      $('.profile__main__textHeader').children().hide();
      $('.profile__main__lowerBox').children().hide();
      $('.profile__main__circleBox--circle').removeClass('active');
      $('html,body').animate({scrollTop:position});
      $('.profile__main__textHeader').children().eq(index).fadeIn();
      $('.profile__main__lowerBox').children().eq(index).fadeIn();
      $('.profile__main__circleBox--circle').eq(index).addClass('active');
      if(index==0){
        $('.prev').hide();
        $('.next').show();
      }else if(index == 3){
        $('.prev').show();
        $('.next').hide();
      }else{
        $('.prev').show();
        $('.next').show();
      }
    })
//skillの表示切り替え・ジャンプ ------------------------------------------------
    $('.menuModal__skills--list').on('click',function(){
      var position = $('.skills__heading').offset().top -30;
      var index = $('.menuModal__skills--list').index(this);
      $('html,body').animate({scrollTop:position})
      if($('.skills__main__upperBlock__contentBox--icon').eq(index).hasClass('active')){
      }else{
        $('.skills__main__upperBlock__contentBox--icon')
          .removeClass('active')
          .css('backgroundColor','rgb(213, 214, 217)')
          .css('boxShadow','none')
        $('.skills__main__upperBlock__contentBox--icon').eq(index)
          .addClass('active')
          .css('backgroundColor','rgb(224, 68, 60)')
          .css('boxShadow','.5vh .5vh rgb(62, 60, 65)')
        $('.skills__main__lowerBlock').animate({left:'140%'})
        $('.skills__main__lowerBlock').eq(index).animate({left:'68%'})
      }
    })
// worksへジャンプ------------------------------------------------
    $('.menuModal__works--list').on('click',function(){
      var index = $('.menuModal__works--list').index(this);
      var position = $('.works__main__contentsBox').eq(index).offset().top - 80;
      $('html,body').animate({scrollTop:position});
      $('.works__main__contentsBox__lowerBlock').eq(index).slideDown();
    })
// ================================================
  })
// ================================================
});