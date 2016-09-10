$(function () {
  var sendTracking = function (category, action, label) {
    ga('send', 'event', category, action, label);
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
    sendTracking('link', 'click', url);
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
    if (!tracking.about && isScrolledIntoView($('#about'))) {
      sendTracking('about', 'scroll');
      tracking.about = true;
    }

    if (!tracking.github && isScrolledIntoView($('#github'))) {
      sendTracking('github', 'scroll');
      tracking.github = true;
    }

    if (!tracking.codewars && isScrolledIntoView($('#codewars'))) {
      sendTracking('codewars', 'scroll');
      tracking.codewars = true;
    }

    if (!tracking.freecodecamp && isScrolledIntoView($('#freecodecamp'))) {
      sendTracking('freecodecamp', 'scroll');
      tracking.freecodecamp = true;
    }

    if (!tracking.contact && isScrolledIntoView($('#contact'))) {
      sendTracking('contact', 'scroll');
      tracking.contact = true;
    }
  });
});
