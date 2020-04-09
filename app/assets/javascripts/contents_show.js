$(function(){
  if (window.location.href.match(/\/contents\/\d+$/)) {
// ------------------------------------------------
    $('.next').on('click',function(){
      var nowActive = $('.active')
      nowActive
        .removeClass('active')
        .next().addClass('active');
    });
    $('.back').on('click',function(){
      var nowActive = $('.active')
      nowActive
        .removeClass('active')
        .prev().addClass('active');
    });
// ------------------------------------------------
    $('.btnWrapper--btn').on('click',function(){
      var btnIndex = $(this).index();
      $('.btnWrapper--btn')
        .removeClass('active')
        .eq(btnIndex).addClass('active');
      $('.contentBox__image')
        .removeClass('active')
        .eq(btnIndex).addClass('active');
      if (btnIndex == 0){
        $('.back').hide();
      }
    });
// ------------------------------------------------
  }
})