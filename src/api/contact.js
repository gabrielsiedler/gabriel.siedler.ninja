const express = require('express');
const contactLib = require('../lib/contact');

const router = module.exports = express.Router();

router.post('/', (req, res) => {
  const email = req.body.email;
  const recaptcha = req.body.recaptcha;

  if (!email) {
    return res.sendStatus(400);
  }

  const validation = contactLib.validate(email);

  if (!validation.valid) {
    return res.status(400).send(validation);
  }

  return contactLib.save(email, recaptcha)
    .then(() => res.sendStatus(200))
    .catch(error => res.status(400).send(error));
});
