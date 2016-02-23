const express = require('express');
const rp = require('request-promise');
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  rp('https://www.codewars.com/api/v1/users/gabrielsiedler')
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(`ERROR: ${err}`)
      res.sendStatus(400);
    })
});
