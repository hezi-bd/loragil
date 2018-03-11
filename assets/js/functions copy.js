

// parallax--------------------------------------------------------------------

var pContainerHeight = $('.about-pic-cover').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  // console.log('hi2');

  if (wScroll <= pContainerHeight) {

    $('.logo-title-box').css({
      'filter' : 'blur('+ wScroll /3.3 +'px ) opacity(calc(100% - ('+ wScroll /3.3 +'%))) brightness(calc(100% + ('+ wScroll /0.4 +'%)))'
    });

    $('.logo-title').css({
      'transform' : 'translate(0px, '+ wScroll /6.2 +'%)'
    });

    $('.logo-top').css({
      'top' : '-'+ wScroll /0.5 +'%', 'transform' : 'translate(-'+ wScroll /1.2 +'px, -'+ wScroll /3 +'%)', 'filter' : 'blur('+ wScroll /50 +'px )', 'width' : 'calc(100% + '+ wScroll /5 +'%)'
    });
    $('.logo-bottom').css({
      'top' : '-'+ wScroll /0.53 +'%', 'transform' : 'translate(-'+ wScroll /1.2 +'px, -'+ wScroll /3 +'%)', 'filter' : 'blur('+ wScroll /100 +'px )', 'width' : 'calc(100% + '+ wScroll /5 +'%)'
    });



}

  // if(wScroll > $('.sites-view').offset().top - ($(window).height() / 1.2)){
  //
  //
  //   $('.site-pic-box').css({'background-position':'center '+ (wScroll - $('.site-pic-box').offset().top) * (-1) +'px'});
  //
  //
  // }

  if(wScroll > $('.sites-view').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.sites-view').offset().top +$(window).height() - 350));

    //$('.site-pic-box').css({'background-position': '20px' '+ Math.abs(offset * 0.2) +'px});
    $('.site-pic-box').css({'background-position-y': 'calc(50% + ('+(offset * (-1)) +'px))'});
    // $('.site-pic-box').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});


  }


});

// -----------------------------------------
