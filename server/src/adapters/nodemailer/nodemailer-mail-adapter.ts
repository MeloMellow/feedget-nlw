import nodemailer from 'nodemailer'
import { MailAdapter, sendMailData } from "../mail-adapater";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8a47136ece5e21",
    pass: "edf575944565c2"
  }
})

export class NodemailerMailAdapater implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {

  await transport.sendMail({
    from: 'Feedget Team <oi@feedget.com>',
    to: 'Doc Bonk <melotbhc@gmail.com>',
    subject,
    html: body
  })
  }
}