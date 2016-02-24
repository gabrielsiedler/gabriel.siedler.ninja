$(function () {
  //Github API
  $.get("api/github")
    .done(function (data) {
      $('#github-public_repos').text(data.user.public_repos);
      $('#github-followers').text(data.user.followers);
      $('#github-following').text(data.user.following);

      $('#github-events').html(data.events.map(function (event) {
        return '<li>' + event.createdAt + ' - <a target="_blank" href="' + event.url  + '">' + event.message + '</a></li>';
      }).join(''));
    })
    .fail(function (error) {
      console.error("Error when trying to fetch data from github:", error)
    })
    .always(function () {
        $('#menu-github-spin').hide();
        $('#github .fa-spin').hide();
      })

    //Codewars API
    $.get("api/codewars")
      .done(function (data) {
        var rank = '<img src="assets/img/' + data.rank[0] + 'kyu.png" />';
        $('#codewars-honor').text(data.honor);
        $('#codewars-leaderboard').text('#' + data.leaderboardPosition);
        $('#codewars-rank').html(rank);
        $('#codewars-score').text(data.score);
        $('#codewars-authored').text(data.authored);
        $('#codewars-completed').text(data.completed);
      })
      .fail(function (error) {
        console.error("Error when trying to fetch data from codewars:", error)
      })
      .always(function () {
        $('#menu-codewars-spin').hide();
        $('#codewars .fa-spin').hide();
      })
})
