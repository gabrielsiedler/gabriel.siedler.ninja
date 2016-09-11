$(function () {
  var sendScrollTracking = function (section) {
    ga('send', 'event', {
      eventCategory: 'Scroll',
      eventAction: 'IntoView',
      eventValue: section
    });
  };

  var tracking = {
    about: false,
    github: false,
    codewars: false,
    freecodecamp: false,
    contact: false,
  };

  $('[data-tracking]').on('click', function (e) {
    e.preventDefault();

    var url = $(this).data('tracking');

    ga('send', 'event', {
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventValue: url
    });

    window.open(url);
  });

  var isScrolledIntoView = function (elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  };

  $(document).on('scroll', function () {
    var sections = ['about', 'github', 'codewars', 'freecodecamp', 'contact'];

    sections.forEach(function (section) {
      var element = $('#' + section);
      if (!tracking[section] && isScrolledIntoView(element)) {
        sendScrollTracking(section);
        tracking[section] = true;
      }
    });
  });
});
