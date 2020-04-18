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
  $('.linkBtn').hover(
    function(){
      $(this).children().children()
        .animate({right:'-100%'},500)
        .animate({right:'100%'},0)
        .animate({right:'30%'},500)
    },
      function(){});
// ================================================
  }
});