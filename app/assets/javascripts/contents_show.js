$(function(){
  if (window.location.href.match(/\/contents\/\d+$/)) {
// 初期値------------------------------------------------
    $('.smallImage').children('.index0').siblings('.viewing').show();
    $('.smallImage').children('.index0').css('filter','blur(2px)');
    $('.infomation').children('.index0').show();
// app名、画像が読み込まれてからスクロール可================================================
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
// image hover================================================
  $('.smallImage').hover(
    function(){
      $(this).children('img').animate({height:'13.5vw'})
    },
    function(){
      $(this).children('img').animate({height:'13vw'})
    });
// click でフィルターの表示等================================================
    $('.smallImage').on('click',function(){
      $('.viewing').hide()
      $('.smallImage').children('img').css('filter','blur(0)')
      $(this).children('.viewing').show();
      $(this).children('img').css('filter','blur(2px)')
      $('.infomation').children('table').hide();
// click でbigDisplayにうつされる------------------------------------------------
      var imageName = $(this).children('img').attr('class')
      var tergetPosition = $('.bigImage').children(`.${imageName}`).offset().left;
      var basePosition = $('.bigImage').children('.index0').offset().left;
      var imagePosition = basePosition - tergetPosition
      $('.bigImage').animate({left:imagePosition})
// click でinfomationが切り替わる------------------------------------------------
      $('.infomation').children(`.${imageName}`).fadeIn();
    })
// show moreボタン================================================
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