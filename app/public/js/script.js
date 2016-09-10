new WOW().init();

$(function () {
  $(window).on('load resize', function () {
    $('.fill-screen').css('height', window.innerHeight);
  });

  $('#background-video').wallpaper({
    source: {
      poster: 'img/poster.png',
      mp4: 'video/background.mp4',
      ogv: 'video/background.ogv',
      webm: 'video/background.webm'
    }
  });

  $('body').scrollspy({
    target: '.navbar',
    offset: 100
  });

  // smooth scrolling
  $('nav a, .btn').on('click', function (event) {
    var MENU_SIZE = 51;
    var offset = 0;
    var HREF = $(this).attr('href');
    if (/^#.+/.test(HREF)) {
      event.preventDefault();
      if (HREF === '#background-video') {
        offset = -51;
      }

      $('html, body').stop().animate({
        scrollTop: $(HREF).offset().top - (MENU_SIZE + offset)
      }, 1000, 'easeInOutExpo');
    }
  });

  $('.portfolio-items').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
