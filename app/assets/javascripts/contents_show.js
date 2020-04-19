$(function(){
  if (window.location.href.match(/\/contents\/\d+$/)) {
// app名、画像が読み込まれてからスクロール可------------------------------------------------
  $('.upperBlock__name').fadeIn(3000)
  setTimeout(function(){
    $.when(
      $('.upperBlock__name').fadeOut(2000),
      $('.upperBlock__overview').fadeIn(3000),
      $('.upperBlock__contentBox').fadeIn(3000)
    ).done(function(){
      $('.lowerBlock').show();
      $('#footer').show();
    });
  },3000);

// show moreボタン------------------------------------------------
$('.linkBtn').hover(
  function(){
      $(this).children().children()
        .animate({right:'-100%'},300)
        .animate({right:'100%'},0)
        .animate({right:'30%'},300)
    },
    function(){});

// ------------------------------------------------
  }
});