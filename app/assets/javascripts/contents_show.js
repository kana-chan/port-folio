$(function(){
  $('.back').on('click',function(){
    console.log('back');
    
  });

  $('.next').on('click',function(){
    console.log('next');
    
  });

  $('.btnWrapper--btn').on('click',function(){
    var btnIndex = $(this).index();
    $('.btnWrapper--btn')
      .removeClass('active')
      .eq(btnIndex).addClass('active');
    $('.contentBox__image')
      .removeClass('active')
      .eq(btnIndex).addClass('active');
  });
})