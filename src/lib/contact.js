const validate = email => {
  const nameRegex = /[a-zA-Z\u00C0-\u024F]{5,150}/;
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const messageRegex = /.{,1000}/;

  const error = {};

  if (!nameRegex(email.name)) {
    error.name = 'The name should have less than 150 characters.';
  }

  if (!emailRegex(email.email)) {
    error.email = 'The email is not valid.';
  }

  if (!messageRegex(email.message)) {
    error.message = 'The message should contain a maximum of 1000 characters.';
  }

  if (Object.keys(error).length) {
    return error;
  }

  return true;
};

module.exports = { validate };
