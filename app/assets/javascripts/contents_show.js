$(function(){
  if (window.location.href.match(/\/contents\/\d+$/)) {
// ------------------------------------------------
    $('.next').on('click',function(){
      var nowActive = $('.active')
      nowActive
        .removeClass('active')
        .next().addClass('active');
      if (nowActive.index() == 0 ){
        $('.back').fadeIn();
      }else if(nowActive.index() == 3){
        $('.next').hide();
      };
    });
// ------------------------------------------------
    $('.back').on('click',function(){
      var nowActive = $('.active')
      nowActive
        .removeClass('active')
        .prev().addClass('active');
      if (nowActive.index() == 4){
        $('.next').fadeIn();
      } else if (nowActive.index() == 1){
        $('.back').hide();
      }
    });
// ------------------------------------------------
    $('.btnWrapper--btn').on('click',function(){
      var btnIndex = $(this).index();
      $('.btnWrapper--btn')
        .removeClass('active')
        .eq(btnIndex).addClass('active');
      $('.contentBox__info')
        .removeClass('active')
        .eq(btnIndex).addClass('active');
      if (btnIndex == 0){
        $('.back').fadeOut();
        $('.next').fadeIn();
      }else if (btnIndex == 4){
        $('.back').fadeIn();
        $('.next').fadeOut();
      } else{
        $('.back').fadeIn();
        $('.next').fadeIn();
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
// ------------------------------------------------
  }
})