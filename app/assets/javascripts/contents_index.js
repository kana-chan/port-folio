$(function(){
  if(window.location.href.match(/\/$/)) {
// topの画像が読み込まれてから、スクロール可================================================
  $.when(
    // $('.top__nameBox').fadeIn(4000)
  ).done(function(){
    $('.main').show();
    $('.login').hide();
    $('#footer').show();
  });

// contents================================================
  $('.works__contentsBox__photoBlock').hover(
    function(){
      $(this).children('img')
        .animate({width:'102%',height:'102%'})
        .css('filter','blur(2px)')
      $(this).children('.filter')
        .fadeIn();
    },
    function(){
      $(this).children('img')
        .animate({width:'100%',height:'100%'})
        .css('filter','blur(0)')
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
// skills================================================
    $('.skills__box__content').hover(
      function(){
        $(this).animate({width:'25vh',height:'25vh',margin:'0',borderRadius:'10px',borderWidth:'3px'},200)
        $(this).children('.name').animate({right:'10%'})
        $(this).children('img').animate({top:'20%',left:'20%'},200)
      },
      function(){
        $(this).animate({width:'15vh',height:'15vh',margin:'5vh',borderRadius:'100px',borderWidth:'0'},200)
        $(this).children('.name').animate({right:'100%'},0)
        $(this).children('img').animate({top:'50%',left:'50%'},150)
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