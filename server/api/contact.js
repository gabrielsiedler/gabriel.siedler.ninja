const express = require('express');

const ContactLib = require('../lib/contact');

const router = express.Router();

router.post('/', (req, res) => {
  const { form } = req.body;

  const Contact = new ContactLib(form);

  const validation = Contact.validate();

  if (validation.hasError) {
    res.status(400).send(validation);
    return;
  }

  Contact
    .sendEmail()
    .then(() => res.sendStatus(200))
    .catch((e) => {
      console.log('Contact API error:', e); // eslint-disable-line no-console
      res.sendStatus(400);
    });
});

module.exports = router;
