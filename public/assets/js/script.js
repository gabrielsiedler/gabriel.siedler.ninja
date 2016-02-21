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

  $('body').scrollspy({ target: '.navbar' });
})
