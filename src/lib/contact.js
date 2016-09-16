const mongoose = require('mongoose');
const axios = require('axios');

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@localhost/contact`);

const ContactModel = mongoose.model('Contact', {
  name: String,
  email: String,
  message: String,
});

const validate = email => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const validation = {
    valid: true,
    error: {},
  };

  const nameLength = email.name.trim().length;
  if (nameLength < 5) {
    validation.valid = false;
    validation.error.name = 'The name should have least 5 characters.';
  } else if (nameLength > 150) {
    validation.valid = false;
    validation.error.name = 'The name should less than 150 characters.';
  }

  if (!emailRegex.test(email.email)) {
    validation.valid = false;
    validation.error.email = 'The email is not valid.';
  }

  const messageLength = email.message.trim().length;
  if (messageLength < 10) {
    validation.valid = false;
    validation.error.message = 'The message should have least 10 characters.';
  } else if (messageLength > 1000) {
    validation.valid = false;
    validation.error.message = 'The message should have less than 1000 characters.';
  }

  return validation;
};

const save = (email, recaptcha) => {
  return new Promise((resolve, reject) => {
    let recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
    recaptchaUrl += `?secret=${process.env.RECAPTCHA_TOKEN}`;
    recaptchaUrl += `&response=${recaptcha}`;

    axios.post(recaptchaUrl).then(response => {
      if (!response.data.success) {
        return reject({ error: { recaptcha: 'Invalid Captcha.' } });
      }

      const Contact = new ContactModel(email);
      return Contact.save(email, (err, data) => {
        if (err) {
          return reject(err);
        }

        return resolve(data);
      });
    });
  });
};

module.exports = { validate, save };
