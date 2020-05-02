$(function(){
// menubtnをおすと変形================================================
  $('.menuBtn').on('click',function(){
    $(this).toggleClass('active')
    if ($(this).hasClass('active')){
      $('.menuBtn--topBar')
        .css('top','50%')
        .css('transform','rotate(225deg)')
      $('.menuBtn--underBar')
        .css('top','50%')
        .css('transform','rotate(-225deg)')
      $('.menuBtn--centerBar').css('transform','rotate(135deg)')
    }else{
      $('.menuBtn--topBar')
        .css('top','30%')
        .css('transform','rotate(0)')
      $('.menuBtn--underBar')
        .css('top','70%')
        .css('transform','rotate(0)')
      $('.menuBtn--centerBar').css('transform','rotate(0)')
    }

  })















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