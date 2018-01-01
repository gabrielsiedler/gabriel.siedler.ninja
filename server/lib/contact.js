/* eslint-disable no-console */
const mailgun = require('mailgun-js');
const ValidateContact = require('../../shared/validation/contactForm');

class ContactLib {
  constructor(fields) {
    this.fields = fields;
  }

  validate() {
    return ValidateContact(this.fields);
  }

  async sendEmail() {
    const { subject, email, message } = this.fields;
    const { MAILGUN_KEY, MAILGUN_DOMAIN } = process.env;

    const data = {
      from: email,
      to: 'gabrielsiedler@gmail.com',
      subject,
      text: message,
    };

    if (!MAILGUN_KEY || !MAILGUN_DOMAIN) {
      console.log(`
        No mailgun keys provided. The following email won't be sent: \n\n
        \tfrom: ${data.from}\n
        \tsubject: ${data.subject}\n
        \tmessage: ${data.text}
      `);
      return;
    }

    const MailGunClient = mailgun({
      apiKey: process.env.MAILGUN_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    });

    await MailGunClient.messages().send(data, (error, body) => {
      if (error) {
        console.log(`Mailgun error: ${error}`);
      } else {
        console.log(`Mailgun sent: ${body}`);
      }
    });
  }
}

module.exports = ContactLib;
