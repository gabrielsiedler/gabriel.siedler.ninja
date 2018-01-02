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
    const { MAILGUN_KEY } = process.env;

    const data = {
      from: email,
      to: 'gabrielsiedler@gmail.com',
      subject,
      text: message,
    };

    if (!MAILGUN_KEY) {
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
      domain: 'gabriel.siedler.ninja',
    });

    await MailGunClient.messages().send(data, (error) => {
      console.log(`
        Sending email: \n\n
        \tfrom: ${data.from}\n
        \tsubject: ${data.subject}\n
        \tmessage: ${data.text}
      `);

      if (error) {
        throw new Error(`Mailgun error: ${error}`);
      }
    });
  }
}

module.exports = ContactLib;
