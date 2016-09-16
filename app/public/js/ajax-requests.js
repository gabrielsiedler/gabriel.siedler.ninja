$(function () {
  // Github API
  $.get('api/github')
    .done(function (data) {
      $('#github-public_repos').text(data.user.public_repos);
      $('#github-followers').text(data.user.followers);
      $('#github-following').text(data.user.following);

      $('#github-events').html(data.events.map(function (event) {
        var li = '<li>' + event.createdAt + ' - ';
        li += event.url ? '<a target="_blank" href="' + event.url + '">' + event.message + '</a>' : event.message;
        li += '</li>';
        return li;
      }).join(''));
    })
    .fail(function () {
      console.error('Error when trying to fetch data from github.');
    })
    .always(function () {
      $('#menu-github-spin').hide();
      $('#github .fa-spin').hide();
    });

    // Codewars API
  $.get('api/codewars')
    .done(function (data) {
      var rank = '<img src="img/' + data.rank[0] + 'kyu.png" />';
      $('#codewars-honor').text(data.honor);
      $('#codewars-leaderboard').text('#' + data.leaderboardPosition);
      $('#codewars-rank').html(rank);
      $('#codewars-score').text(data.score);
      $('#codewars-authored').text(data.authored);
      $('#codewars-completed').text(data.completed);
    })
    .fail(function () {
      console.error('Error when trying to fetch data from codewars.');
    })
    .always(function () {
      $('#menu-codewars-spin').hide();
      $('#codewars .fa-spin').hide();
    });

  $('#contact form').submit(function (e) {
    e.preventDefault();

    var email = {
      name: $('#name').val(),
      email: $('#email').val(),
      message: $('#message').val()
    };

    $('#contact form .btn').prop('disabled', 'disabled');
    $('#contact form .btn i')
      .removeClass('fa-mail-forward')
      .addClass('fa-circle-o-notch fa-spin');

    $.post('api/contact', { email: email })
      .done(function () {
        $('#contact .form-group').removeClass('has-error');
        $('#contact .form-group .help-block').text('');
        $('#contact .form-group input, #contact .form-group textarea').val('');
        $('#contact .form-feedback').show(200);
      })
      .fail(function (error) {
        var errors = error.responseJSON.error;

        $('#contact .form-group').removeClass('has-error');
        $('#contact .form-group .help-block').text('');

        Object.keys(errors).forEach(function (field) {
          $('#' + field).parent('.form-group').addClass('has-error');
          $('#' + field).siblings('.help-block').text(errors[field]);
        });
      })
      .always(function () {
        $('#contact form .btn').prop('disabled', '');
        $('#contact form .btn i')
        .addClass('fa-mail-forward')
        .removeClass('fa-circle-o-notch fa-spin');
      });
  });
});
