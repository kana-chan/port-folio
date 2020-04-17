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
// contents================================================
// hover------------------------------------------------
  // $('.works__contentsBox').hover(
  //   function(){
  //     $(this).children('.works__contentsBox__filter').show()
  //     $(this).children('.works__contentsBox__photoBlock').css('filter','blur(3px)')
  //     $(this).children().children('.works__contentsBox__filter--more').show();
  //   },
  //   function(){
  //     $(this).children('.works__contentsBox__filter')
  //       .hide()
  //       .css('width','100%');
  //     $(this).children('.works__contentsBox__photoBlock').css('filter','');
  //     $(this).children('.works__contentsBox__textBlock').css('right','-45%');
  //   })
  //   // more click------------------------------------------------
  //   $('.works__contentsBox__filter').on('click',function(){
  //     $(this).children('.works__contentsBox__filter--more').hide();
  //     $(this).animate({width:'55%'})
  //     $(this).siblings('.works__contentsBox__textBlock').animate({right:"0"});
  //   })
// ================================================
  }
});