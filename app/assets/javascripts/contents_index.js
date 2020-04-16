$(function(){
  if(window.location.href.match(/\/$/)) {
// topの画像が読み込まれてから、スクロール可に(ログインボタンも消す)================================================
  $.when(
    // $('.top__nameBox').fadeIn(4000)
  ).done(function(){
    $('.main').show();
    $('.login').hide();
  });
// footerをおすと特定位置までジャンプ================================================
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
// contentsにhoverで...================================================
  $('.works__contentsBox').hover(
    function(){
      $('.works__contentsBox__textBlock').animate({right:"0"});
      $('.works__contentsBox__photoBlock').css('filter','blur(5px) grayscale(99%)')
    },
    function(){
      $('.works__contentsBox__textBlock').animate({right:"-35%"});
      $('.works__contentsBox__photoBlock').css('filter','');
    }
    )
// ================================================
  }
});