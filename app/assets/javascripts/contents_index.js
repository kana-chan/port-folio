$(function(){
  if(window.location.href.match(/\/$/)) {
// topの画像が読み込まれてから、スクロール可に(ログインボタンも消す)================================================
  $.when(
    // $('.top__nameBox').fadeIn(4000)
  ).done(function(){
    $('.main').show();
    $('#footer').show();
    $('.login').hide();
  });

// contents================================================























//   $('.works__contentsBox__photoBlock').hover(
//     function(){
//       $(this).children('.works__contentsBox__photoBlock__label').animate({bottom:'0'},200)
//       $(this).parents().next('.works__linkBox')
//         .css('backgroundColor','black')
//         .css('color','white')
//     },
//     function(){
//       $(this).children('.works__contentsBox__photoBlock__label').animate({bottom:'-20vh'},200)
//       $(this).parents().next('.works__linkBox')
//       .css('backgroundColor','white')
//       .css('color','black')
//     });
// // links================================================
//   $('.works__linkBox').hover(
//     function(){
//       $(this)
//         .css('backgroundColor','black')
//         .css('color','white')
//     },
//     function(){
//       $(this)
//         .css('backgroundColor','white')
//         .css('color','black')
//   });
// ================================================
  }
});