const express = require('express');
const codewarsLib = require('../lib/codewars');

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  codewarsLib.fetch()
    .then(data => res.send(data))
    .catch(err => {
      console.log(`ERROR: ${err}`);
      res.sendStatus(400);
    });
});
