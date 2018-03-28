// parallax--------------------------------------------------------------------

var pContainerHeight = $('.about-pic-cover').height();
var pGraphicsContainerHeight = $('.about-pic-cover').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  var wScrollPreview = $('.preview').scrollTop();

  // console.log('hi2');

  if (wScroll <= pContainerHeight) {

    var realWScroll = Math.min(wScroll, 100);




    $('.logo-title').css({
      'transform' : 'translate(0px, '+ realWScroll /2.7 +'%)'
    });







    $('.logo-top.logo-desktop').css({
      'top' : '-'+ wScroll /0.5 +'%', 'transform' : 'translate(-'+ wScroll /1.2 +'px, -'+ wScroll /3 +'%)', 'filter' : 'blur('+ realWScroll /50 +'px )', 'width' : 'calc(100% + '+ wScroll /5 +'%)'
    });
    $('.logo-bottom.logo-desktop').css({
      'top' : '-'+ wScroll /0.56 +'%', 'transform' : 'translate(-'+ wScroll /1.2 +'px, -'+ wScroll /3 +'%)', 'filter' : 'blur('+ realWScroll /50 +'px )', 'width' : 'calc(100% + '+ wScroll /5 +'%)'
    });


    // $('.logo-top.logo-mobile').css({
    //   'top' : '-'+ wScroll /0.5 +'%', 'transform' : 'translateY( -'+ wScroll /3 +'%)', 'filter' : 'blur('+ realWScroll /40 +'px ) opacity(calc(100% - ('+ wScroll /2.5 +'%)))', 'width' : 'calc(100% + '+ wScroll /5 +'%)'
    // });
    // $('.logo-bottom.logo-mobile').css({
    //   'top' : '-'+ wScroll /0.56 +'%', 'transform' : 'translateY( -'+ wScroll /3.2 +'%)', 'filter' : 'blur('+ realWScroll /40 +'px ) opacity(calc(100% - ('+ wScroll /2.5 +'%)))', 'width' : 'calc(100% + '+ wScroll /5 +'%)'
    // });

    // if(wScroll > $('.graphics').offset().top - ($(window).height() / 1.2)){
    //   $('.logo-graphics-bg').css({'filter' : 'blur('+ realWScroll /3.3 +'px )'});
    // }



}

// if (wScroll > pGraphicsContainerHeight) {
//
//   var realGraphicsWScroll = Math.max(wScroll, 100);
//   $('.logo-graphics-bg').css({'filter' : 'blur('+ realWScroll /3.3 +'px )'});
//
// }

if(wScroll > $('.about').offset().top - $(window).height()){

var offset = (Math.min(0, wScroll - $('.about').offset().top +$(window).height() - 350)).toFixed();
//const mq = window.matchMedia( "(min-width: 640px)" );

//$('.logo-title-box').css({'blur': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

};
if (matchMedia) {
  const mq = window.matchMedia("(min-width: 640px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    $('.site-pic-box').css({'background-position':'center '+ (wScroll) * (-1) +'px'});
    $('.logo-title-box').css({
      'transform' : 'translate(0px, '+ realWScroll /-1 +'px)','top' : '-'+ realWScroll /2.7 +'px','filter' : 'blur('+ realWScroll /3.3 +'px ) opacity(calc(100% - ('+ wScroll /3.3 +'%))) brightness(calc(100% + ('+ realWScroll /0.4 +'%)))'
    });

    $('.logo-type-etc').css({
      'transform' : 'translate(0px, '+ realWScroll /-1.7 +'px)'
    });


  } else {
    if(wScroll > $('.site-pre').offset().top - ($(window).height() / 2.2)){

      $('.logo-title-box').css({
        'transform' : 'translate(0px, 0px)','top' : '0px','filter' : 'blur(0px) opacity(100%))) brightness(calc(100% + ('+ realWScroll /0.4 +'%)))'
      });
      $('.logo-graphics-bg').css({'filter' : 'blur(0) !important'});



      // $('.site-pic-box').css({'background-position':'center '+ (wScroll) * (-2.3) +'px'});
      $('.site-pic-box').css({'background-position':'center top'});


    };
  }

}
// if (mq.matches) {
//   $('.site-pic-box').css({'background-position':'center '+ (wScroll) * (-1) +'px'});
// } else {
//   // window width is less than 500px
// }



  // if(wScroll > $('.graphics').offset().top - ($(window).height() / 1.2)){
  //   var realWScrollGraphics = Math.max(wScroll, 200);
  //
  //
  //   $('.logo-graphics-bg').css({'filter' : 'opacity(calc(0% + (calc(50% + (' + Math.abs(realWScrollGraphics) +'%))) blur(calc(50px - (' + Math.abs(realWScrollGraphics /50) +'px)) )'});
  //
  //
  // };

  if(wScroll > $('.graphics').offset().top - ($(window).height() / 1.2)){
    var realWScrollGraphics = Math.max(wScroll, 1000);
    var realWScrollGraphics2 = Math.min(wScroll, 1000);
    console.log(' + Math.abs(realWScrollGraphics / 10) +');
    //console.log(realWScroll /2.7 );


    $('.logo-graphics-bg').css({'filter' : 'blur(calc(250px - (' + Math.abs(realWScrollGraphics /8.3) +'px))) '});
    $('.logo-graphics-bg-effects').css({'filter' : 'opacity(calc(-900% + (' + Math.abs(realWScrollGraphics / 2) +'%)))'});


  };

  if(wScroll > $('.graphics').offset().top - ($(window).height() / 1.2)){


    $('.big-logo-top-view').css({'background-position':'center '+ (wScroll - $('.big-logo-top-view').offset().top + 150) * (2.5) +'px'});


  };
  if(wScroll > $('.graphics').offset().top - ($(window).height() / 1.2)){


    $('.big-logo-left-view').css({'background-position-x':(wScroll - $('.big-logo-left-view').offset().top + 0) * (-0.4) +'px'});


  };
  if(wScroll > $('.graphics').offset().top - ($(window).height() / 1.2)){


    $('.big-logo-center').css({'background-position':'center '+ (wScroll - $('.big-logo-center').offset().top + 430) * (-0.5) +'px'});



  };
  if(wScroll > $('.graphics-box').offset().top - ($(window).height() / 1.2)){


    $('.big-logo-right-top').css({'background-position-x':(wScroll - $('.big-logo-right-top').offset().top + 0) * (1.4) +'px'});
    $('.big-logo-right-bottom').css({'background-position-x':(wScroll - $('.big-logo-right-bottom').offset().top + 0) * (1.1) +'px'});


  };




});

// -----------------------------------------


$(function() {
  designBGStuff();
  smoothScroll(300);
  // mobileNav();
});


// function mobileNav() {
//   $('.mobile-nav-toggle').on('click', function(){
//     var status = $(this).hasClass('is-open');
//     if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
//     else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
//   });
// }


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function designBGStuff() {

  // $('.logo-graphics-bg::after').hover(function(){
  //   $('.logo-graphics-fixed').addClass('show-fixed-bg');
  // }, function(){
  //   // off > revert the color
  //   $('.logo-graphics-fixed').removeClass('show-fixed-bg');
  // });




// images show in fixed places in graphics--------

  $('.graphics-box-butt').hover(function(){
    $('.bg-fixed').addClass('bg-fixed-show');
    $('.home-lead-title').addClass('blur-bg');
    //$('.clients-top').addClass('blur-bg');
  }, function(){

    $('.bg-fixed').removeClass('bg-fixed-show');
    $('.home-lead-title').removeClass('blur-bg');
    //$('.clients-top').removeClass('blur-bg');
  });

  $('.big-logo-top-view').hover(function(){
    $('.top-view-fixed').addClass('show-fixed');
  }, function(){

    $('.top-view-fixed').removeClass('show-fixed');
  });

  $('.big-logo-left-view-shade').hover(function(){
    $('.left-view-fixed').addClass('show-fixed');
  }, function(){

    $('.left-view-fixed').removeClass('show-fixed');
  });

  $('.big-logo-center-shade').hover(function(){
    $('.center-view-fixed').addClass('show-fixed');
  }, function(){

    $('.center-view-fixed').removeClass('show-fixed');
  });

  $('.big-logo-right-top-reflect').hover(function(){
    $('.right-top-view-fixed').addClass('show-fixed');
  }, function(){

    $('.right-top-view-fixed').removeClass('show-fixed');
  });

  $('.big-logo-right-bottom-shade').hover(function(){
    $('.right-bottom-view-fixed').addClass('show-fixed');
  }, function(){

    $('.right-bottom-view-fixed').removeClass('show-fixed');
  });


}



// Deomonstrate modularity
function timerModule (options) {
    var defaults = {
            interval: 1
        },
        settings,
        functions = [],
        timer;

    settings = $.extend({}, defaults, options);

    function start () {
        timer = setTimeout(function () {
            // execute functions
            for (var i = 0; i < functions.length; i++)
                functions[i]();

            stopTimer();
            start();
        }, (settings.interval * 10000));
    }

    function stopTimer () {
        clearTimeout(timer);
    }

    function attachFunction (func) {
        if ($.isFunction(func)) {
            functions.push(func);
            return true;
        }

        return false;
    }

    return {
        attachFunction: attachFunction,
        start: start,
        stop: stopTimer
    }
}

(function ($, timer) {

    "use strict"

    var $window;

    function fumbleArticle () {
        var $articles = $('.article-thumb'),
            randNum = Math.floor(Math.random() * $articles.length) + 1

        $articles.eq(randNum).addClass('is-emph')
        .siblings().removeClass('is-emph');
    }

    function swapDribbleBackground () {
        var $tile = $('.design-img-link');

        // on hover
        $tile.hover(function (e) {
            var $this = $(this),
                $container = $this.parents().parents();

            $container.css({
                'background-color': $(this).data('color')
            });

        // off hover
        }, function (e) {
            var $this = $(this),
                $container = $this.parents().parents();

            $container.css({
                'background-color': $container.data('orig-color')
            });
        });
    }
    function swapSiteBackground () {
        var $caroThumb = $('.caro-thumb');

        // on click
        $caroThumb.click(function (e) {
            var $this = $(this),
                $container = $this.parents().siblings(".sites-box-frame");

        // off hover
        }, function (e) {
            var $this = $(this),
                $container = $this.parents();
        });
    }



})(jQuery, timerModule({
    interval: 4
}));



// -----------------------------------------------------------------------------
// Global functionality
// -----------------------------------------------------------------------------

(function ($) {

    "use strict"

    var $body,
        $window,
        settings = {
            scrollDuration: 300
        };
//----easy scralling
    function onMobileToggleClick (e) {
        var $this = $(this),
            $navigation = $('.mobile-nav');

        $this.toggleClass('is-open');
        $navigation.toggleClass('is-open');
    }

    function onBlankLinkClick (e) {
        var $this = $(this),
            href = $this.attr('href'),
            $target = $(href);

        if ($target.length == 0)
            return;

        e.preventDefault();

        $body.animate({
            scrollTop: $target.offset().top
        }, settings.duration);
    }

    function bindings () {
        // Toggle mobile navigation (mobileNav)
        $('.mobile-nav-toggle').on('click', onMobileToggleClick);

        // Smooth scroll (smoothScroll)
        $('a[href^="#"]').on('click', onBlankLinkClick);
    }

    $(document).ready(function () {
        // Variable definitions
        $body = $('html, body');
        $window = $(window);

        bindings();
    });

})(jQuery);



// -----------------------------------------------------------------------------
// OLD functionality
// -----------------------------------------------------------------------------
$(window).scroll(function() {
  //dustBoxVidScroll();
  //startSiteing();
  startBanners();
  workBelt();
	workLoad();
  //clientStuff();
});

// function dustBoxVidScroll() {
//
//   var wScroll = $(window).scrollTop();
//
//    $('.dust-box').css('background-position','center -'+ wScroll + 'px');
// }


//toggle screen wide & mobile loRagil---------



$("#cmn-toggle-1").change(function() {
    if(this.checked) {
        $('.hands-box').addClass('box-rotate');
        $('.slider-sites-for').addClass('box-rotate');
        $('.ul-caro').addClass('rotate');
        $('.switch-icons').addClass('rotate');
        $('.view-wide').removeClass('butt-on');
        $('.view-mobile').addClass('butt-on');
    } else {
  		$('.hands-box').removeClass('box-rotate');
      $('.slider-sites-for').removeClass('box-rotate');
      $('.ul-caro').removeClass('rotate');
      $('.switch-icons').removeClass('rotate');
      $('.view-wide').addClass('butt-on');
      $('.view-mobile').removeClass('butt-on');
  	}
});


// function startSiteing() {
//
//   var wScroll = $(window).scrollTop();
//
//   if($('section.sites-view').offset().top) {
//     if($(window).width() > 2) {
//     //$('.faces').addClass('launched');
//       if(!$('.caro-thumb').hasClass('thumb-on')){
//         setTimeout(function(){
//           $('.caro-thumb:nth-child(1)').addClass('thumb-on');
//         }, 400);
//       }
//     }
//   }
//
//
// }
function startBanners() {

  var wScroll = $(window).scrollTop();

  if($('section.my-sites-view').offset().top - $(window).height()/2 < wScroll) {
    if($(window).width() > 2) {
    //$('.faces').addClass('launched');
      // if(!$('.caro-thumb').hasClass('thumb-on')){
      //   setTimeout(function(){
      //     $('.caro-thumb:nth-child(1)').addClass('thumb-on');
      //   }, 400);
      if(!$('.tablinks').hasClass('active')){
        setTimeout(function(){
          $('.tablinks:nth-child(1)').addClass('active');
        }, 400);
      }
    }
  }


}

function workBelt() {

  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-container label').click(function() {
    $('.work-belt').addClass("slided");
    $('.work-container').show(1000);
  });

  $('.work-return').click(function() {
    $('.work-belt').removeClass("slided");
    $('.work-container').hide(1000);
  });

}
function  workLoad() {

  $.ajaxSetup({ cache: true });

  $('.thumb-container label').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        spinner = '<div class="loader">Loading...</div>',
        url = $this.find('.thumb-unit').data('url');

    $('.project-load').html(spinner).load(url);
    $('.project-title').text(newTitle);
  });

}

(function ($) {

    "use strict"

    var $window,
        $ulCaro,
        $caroThumb,
        $siteView;

    function caroThumbNarrowStart() {
        $caroThumb.css({
          'top': '230px',
          'left': '0px'
        });

        $caroThumb.first().addClass('thumb-on')
        .siblings().removeClass('thumb-on');
    }

/////carousel-control--------------------------

    function onThumbClick (e) {
      //$(this).parent().siblings().children().css({'background-image': $(this).data('cover'), 'height': $(this).data('height')});
        var $this = $(this),
            $siblings = $this.siblings(),
            $parent = $(this).parent();
            //$siteView = $('.sites-box-view');

            //$bgColor = $(this).data('color');


        if (!$this.hasClass('back-btn')) {
            $this.addClass('thumb-on');
            $siblings.removeClass('thumb-on');
        };
          // off > revert the color



    }

    function bindings () {
        $caroThumb.on('click', onThumbClick);
    }

    $(document).ready(function () {
        // variable definitions
        $window = $(window);

        $caroThumb = $('.caro-thumb');

        bindings();
    });

})(jQuery);

// --------------------------000---------------------------------------------------




function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



//---------------------------------------test

// carousel = (function(){
//
//   if (!document.querySelector ||
//       !('classList' in document.body)) {
//     return false;
//   }
//
//   // Read necessary elements from the DOM once
//   var box = document.querySelector('.carouselbox');
//   var next = box.querySelector('.next');
//   var prev = box.querySelector('.prev');
//
//   // Define the global counter, the items and the
//   // current item
//   var counter = 0;
//   var items = box.querySelectorAll('.content li');
//   var amount = items.length;
//   var current = items[0];
//   for (var i = 0; i < amount; ++i) {
//     if (items[i].classList.contains('current')) {
//       current = items[i];
//       counter = i;
//       break;
//     }
//   }
//
//   // hide all elements and apply the carousel styling
//   box.classList.add('active');
//
//   // navigate through the carousel
//
//   function navigate(direction) {
//
//     // hide the old current list item
//     current.classList.remove('current');
//
//     // calculate th new position
//     counter = counter + direction;
//
//     // if the previous one was chosen
//     // and the counter is less than 0
//     // make the counter the last element,
//     // thus looping the carousel
//     if (direction === -1 &&
//         counter < 0) {
//       counter = amount - 1;
//     }
//
//     // if the next button was clicked and there
//     // is no items element, set the counter
//     // to 0
//     if (direction === 1 &&
//         !items[counter]) {
//       counter = 0;
//     }
//
//     // set new current element
//     // and add CSS class
//     current = items[counter];
//     current.classList.add('current');
//   }
//
//   // add event handlers to buttons
//   next.addEventListener('click', function(ev) {
//     navigate(1);
//   });
//   prev.addEventListener('click', function(ev) {
//     navigate(-1);
//   });
//
//   // show the first element
//   // (when direction is 0 counter doesn't change)
//   navigate(0);
//
// })();


// parallax--------------------------------------------------------------------

// var pContainerHeight = $('.about').height();
//
// $(window).scroll(function(){
//
//   var wScroll = $(this).scrollTop();
//
//   console.log('hi2');
//
//   if (wScroll <= pContainerHeight) {
//
//     $('.logo-title').css({
//       'transform' : 'translate(0px, '+ wScroll /2 +'%)'
//     });
//
//     $('.back-bird').css({
//       'transform' : 'translate(0px, '+ wScroll /4 +'%)'
//     });
//
//     $('.fore-bird').css({
//       'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
//     });
//
//   }
//
//
//   // Landing Elements
//   if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
//
//     $('.clothes-pics figure').each(function(i){
//
//       setTimeout(function(){
//         $('.clothes-pics figure').eq(i).addClass('is-showing');
//       }, (700 * (Math.exp(i * 0.14))) - 700);
//     });
//
//   }
//
//
//   // Promoscope
//   if(wScroll > $('.large-window').offset().top - $(window).height()){
//
//     $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});
//
//     var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);
//
//     $('.window-tint').css({'opacity': opacity});
//
//   }
//
//
//   // Floating Elements
//
//   if(wScroll > $('.blog-posts').offset().top - $(window).height()){
//
//     var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();
//
//     $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
//
//     $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
//
//   }
// });
