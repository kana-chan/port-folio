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
    }
// 各項目をクリックで、ジャンプ------------------------------------------------
    $('.menuModal__profile--list').on('click',function(){
      var position = $('.profile').offset().top;
      var index = $(this).index() - 1;
      $('.profile__main__textHeader').children().hide();
      $('.profile__main__lowerBox').children().hide();
      $('.profile__main__circleBox--circle').removeClass('active');
      $('html,body').animate({scrollTop:position})
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
// ------------------------------------------------
    $('.menuModal__skills--list').on('click',function(){
      var position = $('.skills').offset().top;
      var index = $(this).index() - 1;
      console.log(index);
      $('html,body').animate({scrollTop:position})
      if($('.skills__main__upperBlock__contentBox--icon').eq(index).hasClass('active')){
      }else{
        $('.skills__main__upperBlock__contentBox--icon').removeClass('active');
        $('.skills__main__upperBlock__contentBox--icon').eq(index).addClass('active')
        $('.skills__main__lowerBlock').animate({left:'140%'})
        $('.skills__main__lowerBlock').eq(index).animate({left:'68%'})
      }
    })
// ------------------------------------------------
    $('.menuModal__works--list').on('click',function(){
      var position = $('.works').offset().top;
      var index = $(this).index() - 1;
      console.log(index);
      $('html,body').animate({scrollTop:position})
    })
// ================================================
  })















// skillへ------------------------------------------------
$('.footerLinks--skills').on('click',function(){
  var skills = $('.skills').offset().top;
  $('html,body').animate({scrollTop:skills})
});
// profileへ------------------------------------------------
$('.footerLinks--profile').on('click',function(){
  var profile = $('.profile').offset().top;
  $('html,body').animate({scrollTop:profile})
});
// worksへ------------------------------------------------
$('.footerLinks--works').on('click',function(){
  var works = $('.works').offset().top;
  $('html,body').animate({scrollTop:works})
});

});