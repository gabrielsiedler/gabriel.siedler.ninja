const express = require('express');
const contactLib = require('../lib/contact');

const router = module.exports = express.Router();

router.post('/', (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.sendStatus(400);
  }

  const validation = contactLib.validate(email);

  if (!validation.valid) {
    return res.status(400).send(validation);
  }

  return contactLib.save(email)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));
});
