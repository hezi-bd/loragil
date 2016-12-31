
$(window).scroll(function() {
  youtubeVidScroll();
  //startMentoring();
  startArticles();
});


function youtubeVidScroll() {

  var wScroll = $(window).scrollTop();

  $('.dust-box').css('background-position','center -'+ wScroll +'px');
}
