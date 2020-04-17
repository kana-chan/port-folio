$(function(){
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

// hover で================================================
  $('.jumpBtn').hover(
    function(){
      $(this).children('.footerLinks--line').animate({width:'5vw'},200)
    },
    function(){
      $(this).children('.footerLinks--line').animate({width:'2vw'},200)
    });
});