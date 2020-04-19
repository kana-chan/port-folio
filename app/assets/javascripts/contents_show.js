$(function(){
  if (window.location.href.match(/\/contents\/\d+$/)) {
// ------------------------------------------------
  $.when(
    $('.upperBlock__name').fadeIn(3000)
  ).done(function(){
    $('.upperBlock__overview').fadeIn(3000)
    $('.upperBlock__contentBox').fadeIn(3000)
    $('.lowerBlock').show();
    $('#footer').show();
    console.log("yes"); 
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
});