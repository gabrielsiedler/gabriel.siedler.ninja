const express = require('express');
const contactLib = require('../lib/contact');

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  const email = req.body.email;
  const validation = contactLib.validate(email);

  if (validation) {
    contactLib.save(email)
      .then(() => res.sendStatus(200));
  } else {
    res.status(400).send(validation);
  }
});
