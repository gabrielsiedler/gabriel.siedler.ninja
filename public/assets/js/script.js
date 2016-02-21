$(function () {
  $(window).on('load resize', function () {
    $('.fill-screen').css('height', window.innerHeight);
  })

  $('#background-video').wallpaper({
    source: {
      poster: 'assets/img/poster.png',
      mp4: 'assets/video/background.mp4',
      ogv: 'assets/video/background.ogv',
      webm: 'assets/video/background.webm'
    }
  });

  $('body').scrollspy({
    target: '.navbar',
    offset: 100
  });

  //smooth scrolling
  $('nav a, .btn').on('click', function (event) {
    var MENU_SIZE = 51;
    if (/^#/.test($(this).attr('href'))) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - MENU_SIZE
      }, 1000, 'easeInOutExpo');
    }
  });
})
