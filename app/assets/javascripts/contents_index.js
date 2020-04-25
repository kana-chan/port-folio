$(function(){
  if(window.location.href.match(/\/$/)) {
// topテキストのアニメーション================================================
  $.when(
    $('.underLine').each(function(i){
      $(this).delay(100*i).animate({width:'100%'},300)
    })
  ).done(function(){
    $(this).prev('h1').css('color','black')
    $('.underLine').animate({height:'8%'},300)
  })

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
// hover------------------------------------------------
    $('.skillBlock').hover(
      function(){
        if ($(this).next('.linkBlock').hasClass('active')){
        }else{
        $(this).animate({left:'49%'},200)
        $(this).children().children('i').css('transform','rotate(90deg)')
        $(this).children('.skills__wrapper__contentBox__skillBlock__sideFilter').css('filter','none')
        }
      },
      function(){
        if ($(this).next('.linkBlock').hasClass('active')){
        }else{
          $(this).animate({left:'50%'},200)
          $(this).children().children('i').css('transform','rotate(0)')
          $(this).children('.skills__wrapper__contentBox__skillBlock__sideFilter').css('filter',' brightness(0) invert(0.8)')
        }
      });

      $('.skills__wrapper__contentBox__linkBlock__contentRow').children('a').hover(function(){
        $(this).prev()
          .animate({width:'1.5vh',height:'1.5vh'},200)
          .css('filter','none')
        $(this).next().children()
          .animate({left:'120%'},300)
          .animate({left:'0'},0)
          .animate({left:'50%'},300)
      },
      function(){
        $(this).prev()
          .animate({width:'1vh',height:'1vh'},100)
          .css('filter','brightness(0) invert(0.8)')
      });
// click------------------------------------------------
    $('.skillBlock').on('click',function(){
      if ($(this).next('.linkBlock').hasClass('active')){
        $(this).children().children('i').css('transform','rotate(0)')
      } else {
        $(this).children().children('i').css('transform','rotate(-135deg)')
      }
      $(this).next()
        .slideToggle()
        .toggleClass('active')
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