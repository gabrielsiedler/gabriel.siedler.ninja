const express = require('express');
const githubLib = require('../lib/github');

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  githubLib.fetch()
    .then(data => res.send(data))
    .catch(err => {
      console.log(`ERROR: ${err}`);
      res.sendStatus(500);
    });
});
