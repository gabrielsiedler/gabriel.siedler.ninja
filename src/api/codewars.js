const express = require('express');
const rp = require('request-promise');
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  const request = {
    uri: 'https://www.codewars.com/api/v1/users/gabrielsiedler',
    json: true
  };

  rp(request)
    .then(data => {
      res.send({
        honor: data.honor,
        leaderboardPosition: data.leaderboardPosition,
        rank: data.ranks.overall.name,
        score: data.ranks.overall.score,
        authored: data.codeChallenges.totalAuthored,
        completed: data.codeChallenges.totalCompleted
      });
    })
    .catch(err => {
      console.log(`ERROR: ${err}`)
      res.sendStatus(400);
    })
});
