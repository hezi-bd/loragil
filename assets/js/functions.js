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
  $('.thumb-bott').hover(function(){
    $(this).parent().css('background-image', $(this).data('image'));
  }, function(){
    // off > revert the color
    $(this).parent().css('background-image', $(this).parent().data('orig-image'));
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
  dustBoxVidScroll();
  startSiteing();
  //clientStuff();
});

function dustBoxVidScroll() {

  var wScroll = $(window).scrollTop();

  $('.dust-box').css('background-position','center -'+ wScroll + 'px');
}


//toggle screen wide & mobile loRagil---------

$("#cmn-toggle-1").change(function() {
    if(this.checked) {
        $('.hands-box').addClass('box-rotate');
        $('.ul-caro').addClass('rotate');
        $('.view-wide').removeClass('butt-on');
        $('.view-mobile').addClass('butt-on');
    } else {
  		$('.hands-box').removeClass('box-rotate');
      $('.ul-caro').removeClass('rotate');
      $('.view-wide').addClass('butt-on');
      $('.view-mobile').removeClass('butt-on');
  	}
});

function startSiteing() {

  var wScroll = $(window).scrollTop();

  if($('section.sites-view').offset().top - $(window).height()/2 < wScroll) {
    if($(window).width() > 2) {
    //$('.faces').addClass('launched');
      if(!$('.caro-thumb').hasClass('thumb-on')){
        setTimeout(function(){
          $('.caro-thumb:nth-child(1)').addClass('thumb-on');
        }, 400);
      }
    }
  }


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

carousel = (function(){

  if (!document.querySelector ||
      !('classList' in document.body)) {
    return false;
  }

  // Read necessary elements from the DOM once
  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');

  // Define the global counter, the items and the
  // current item
  var counter = 0;
  var items = box.querySelectorAll('.content li');
  var amount = items.length;
  var current = items[0];
  for (var i = 0; i < amount; ++i) {
    if (items[i].classList.contains('current')) {
      current = items[i];
      counter = i;
      break;
    }
  }

  // hide all elements and apply the carousel styling
  box.classList.add('active');

  // navigate through the carousel

  function navigate(direction) {

    // hide the old current list item
    current.classList.remove('current');

    // calculate th new position
    counter = counter + direction;

    // if the previous one was chosen
    // and the counter is less than 0
    // make the counter the last element,
    // thus looping the carousel
    if (direction === -1 &&
        counter < 0) {
      counter = amount - 1;
    }

    // if the next button was clicked and there
    // is no items element, set the counter
    // to 0
    if (direction === 1 &&
        !items[counter]) {
      counter = 0;
    }

    // set new current element
    // and add CSS class
    current = items[counter];
    current.classList.add('current');
  }

  // add event handlers to buttons
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });

  // show the first element
  // (when direction is 0 counter doesn't change)
  navigate(0);

})();
