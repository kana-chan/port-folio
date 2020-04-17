$(function(){
  if(window.location.href.match(/\/$/)) {
// topの画像が読み込まれてから、スクロール可に(ログインボタンも消す)================================================
  $.when(
    // $('.top__nameBox').fadeIn(4000)
  ).done(function(){
    $('.main').show();
    $('.login').hide();
  });

// contents================================================
// hover------------------------------------------------

  $('.works__contentsBox__photoBlock').hover(
    function(){
      $(this).children('.works__contentsBox__photoBlock__label').animate({bottom:'0'},200)
      // $(this).siblings('.works__contentsBox__separateText').animate({left:'85.6%'},200)
    },
    function(){
      $(this).children('.works__contentsBox__photoBlock__label').animate({bottom:'-20vh'},200)
      // $(this).siblings('.works__contentsBox__separateText').animate({left:'-15%'},200)
    });
// ================================================
  }
});