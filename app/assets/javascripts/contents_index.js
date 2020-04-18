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
  $('.works__contentsBox__photoBlock').hover(
    function(){
      $(this).children('img')
        .animate({width:'103%',height:'103%'})
      $(this).children('.filter')
        .fadeIn();
    },
    function(){
      $(this).children('img')
        .animate({width:'100%',height:'100%'})
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