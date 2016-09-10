const rp = require('request-promise');

const fetch = () => {
  return new Promise(resolve => {
    const request = {
      uri: 'https://www.codewars.com/api/v1/users/gabrielsiedler',
      json: true,
    };

    if (process.env.CODEWARS_TOKEN) {
      request.headers = {
        Authorization: process.env.CODEWARS_TOKEN,
      };
    }

    return rp(request)
      .then(data => {
        resolve({
          honor: data.honor,
          leaderboardPosition: data.leaderboardPosition,
          rank: data.ranks.overall.name,
          score: data.ranks.overall.score,
          authored: data.codeChallenges.totalAuthored,
          completed: data.codeChallenges.totalCompleted,
        });
      });
  });
};

module.exports = { fetch };
