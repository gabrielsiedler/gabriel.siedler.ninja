const sanitize = (fields) => {
  const sanitizedFields = {};

  Object
    .keys(fields)
    .forEach(field => (sanitizedFields[field] = fields[field] && fields[field].trim()));

  return sanitizedFields;
};

const validate = (fields = {}) => {
  const requiredFields = ['subject', 'email', 'message'];

  const output = {
    hasError: false,
    error: null,
  };

  const sanitizedFields = sanitize(fields);
  const allRequiredFilled = requiredFields.every(requiredField => !!sanitizedFields[requiredField]);

  if (!allRequiredFilled) {
    output.hasError = true;
    output.error = 'Please fill out all fields';
  }

  if (output.hasError) return output;

  const { subject, email, message } = sanitizedFields;

  if (subject.length <= 5 || subject.length > 40) {
    output.hasError = true;
    output.error = 'Subject should have at least 5 and at last 40 characters';
  }

  if (email.length <= 5 || email.length > 80) {
    output.hasError = true;
    output.error = 'Email should have at least 5 and at last 80 characters';
  }

  if (message.length <= 10 || message.length > 500) {
    output.hasError = true;
    output.error = 'Message should have at least 10 and at last 500 characters';
  }

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email)) {
    output.hasError = true;
    output.error = 'Please enter a valid email';
  }

  return output;
};

module.exports = validate;
