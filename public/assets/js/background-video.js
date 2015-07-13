function adjustBackground () {
  var video = $('#video').get(0);

  var centralizeBackground = function () {
    var offset = {
      x: 0,
      y: 0
    };

    if(video.offsetWidth > window.innerWidth)
      offset.x = -(video.offsetWidth - window.innerWidth) / 2;

    if(video.offsetHeight > window.innerHeight)
      offset.y = -(video.offsetHeight - window.innerHeight) / 2;

    video.style.left = offset.x + 'px';
    video.style.top = offset.y + 'px';
  };

  if(video.offsetHeight < window.innerHeight) {
    video.style.height = '100%';
    video.style.width = 'inherit';
  }

  if(video.offsetWidth < window.innerWidth) {
    video.style.height = 'inherit';
    video.style.width = '100%';
  }

  if(video.offsetWidth > window.innerWidth || video.offsetHeight > window.innerHeight) {
    centralizeBackground();
  }
}

window.onresize = function () {
  adjustBackground();
};

$(function() {
  var videoElement = $('#video').get(0);

  adjustBackground();

  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  //Showing just static image in mobiles
  if (isMobile) {
    $('#loader').hide();
    return;
  }

  var videos = [
    '<source src="assets/background.mp4" type="video/mp4">',
    '<source src="assets/background.ogv" type="video/ogv">',
    '<source src="assets/background.webm" type="video/webm">'
  ];

  $('#video').append(videos.join('\n'));


  videoElement.addEventListener('loadeddata', function() {
    adjustBackground();
    videoElement.play();
    $('#loader').hide();
  });
});