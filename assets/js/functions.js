//$(function(){});
$(window).scroll(function(){
  dustBoxScroll();
});


function dustBoxScroll() {
  var wScroll = $(window).scrollTop();

  $('.dust-box').css('background-position', 'center -'+ wScroll +'px');
};
