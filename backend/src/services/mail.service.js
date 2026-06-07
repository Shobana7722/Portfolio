const transporter = require('../config/mail');
const env = require('../config/env');

class MailService {
  async sendEmail(options) {
    const message = {
      from: `${env.mail.fromName} <${env.mail.fromEmail}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html
    };

    const info = await transporter.sendMail(message);
    console.log('Message sent: %s', info.messageId);
  }
}

module.exports = new MailService();
