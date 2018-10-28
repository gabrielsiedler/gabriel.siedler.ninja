import * as bugsnag from 'bugsnag'
import mailgun from 'mailgun-js'

const printEmail = (data) => console.log`
  \tfrom: ${data.from}\n
  \tsubject: ${data.subject}\n
  \tmessage: ${data.text}
`

export class ContactService {
  fields: any

  constructor(fields) {
    this.fields = fields
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
      console.error('No mailgun key provided.')
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
        console.log(`Mailgun error: ${error}`)
        bugsnag.notify(`Mailgun error: ${error}`)
      }
    })
  }
}
