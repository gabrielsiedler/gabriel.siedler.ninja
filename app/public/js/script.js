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

  $('.form-feedback .close').on('click', function (e) {
    e.preventDefault();

    $('.form-feedback').hide(200);
  });
});
