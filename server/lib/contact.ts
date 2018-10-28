import * as bugsnag from 'bugsnag'
import * as mailgun from 'mailgun-js'
import { validate as ValidateContact } from '../../shared/validation/contactForm'

const printEmail = (data) => console.log`
  \tfrom: ${data.from}\n
  \tsubject: ${data.subject}\n
  \tmessage: ${data.text}
`

export class ContactLib {
  fields: any

  constructor(fields) {
    this.fields = fields
  }

  validate() {
    return ValidateContact(this.fields)
  }

  async sendEmail() {
    const { subject, email, message } = this.fields
    const { MAILGUN_KEY } = process.env

    const data = {
      from: email,
      to: 'gabrielsiedler@gmail.com',
      subject: `gs.ninja (${subject})`,
      text: message,
    }

    if (!MAILGUN_KEY) {
      console.error('No mailgun key provided.') // tslint:disable-line:no-console
      printEmail(data)

      return
    }

    const MailGunClient = mailgun({
      apiKey: process.env.MAILGUN_KEY,
      domain: 'gabriel.siedler.ninja',
    })

    await MailGunClient.messages().send(data, (error) => {
      printEmail(data)

      if (error) {
        console.log(`Mailgun error: ${error}`) // tslint:disable-line:no-console
        bugsnag.notify(`Mailgun error: ${error}`)
      }
    })
  }
}
