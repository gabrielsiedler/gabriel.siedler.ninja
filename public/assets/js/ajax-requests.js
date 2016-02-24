$(function () {
//   //Github API
//   $.get("api/github")
//     .done(function (data) {
//       console.log('ok', data);
//       $('#github').text(data);
//     })
//     .fail(function (error) {
//       console.log("error:", error)
//       $('#github').text('Error');
//     })
//     .always(function () {
//       //removeLoader
//     })
//
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
