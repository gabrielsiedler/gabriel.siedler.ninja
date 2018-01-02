/* eslint-disable no-console */
const mailgun = require('mailgun-js');
const bugsnag = require('bugsnag');

const ValidateContact = require('../../shared/validation/contactForm');

const printEmail = data => console.log`
  \tfrom: ${data.from}\n
  \tsubject: ${data.subject}\n
  \tmessage: ${data.text}
`;

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
      subject: `gs.ninja (${subject})`,
      text: message,
    };

    if (!MAILGUN_KEY) {
      console.log('No mailgun key provided.');
      printEmail(data);
      return;
    }

    const MailGunClient = mailgun({
      apiKey: process.env.MAILGUN_KEY,
      domain: 'gabriel.siedler.ninja',
    });

    await MailGunClient.messages().send(data, (error) => {
      printEmail(data);

      if (error) {
        console.log(`Mailgun error: ${error}`);
        bugsnag.notify(`Mailgun error: ${error}`);
      }
    });
  }
}

module.exports = ContactLib;
