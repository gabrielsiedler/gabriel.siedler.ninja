const express = require('express');
const rp = require('request-promise');
const router = module.exports = express.Router();

router.get('/', (req, res) => {

  const request = {
    uri: 'https://api.github.com/users/gabrielsiedler',
    headers: {
      'User-Agent': 'http://gabriel.siedler.ninja'
    },
    json: true
  };

  rp(request)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(`ERROR: ${err}`)
      res.sendStatus(400);
    })
});
