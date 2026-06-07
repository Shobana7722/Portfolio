const nodemailer = require("nodemailer");
const env = require("./env");

const transporter = nodemailer.createTransport({
  host: env.mail.smtpHost,
  port: Number(env.mail.smtpPort) || 587,
  secure: Number(env.mail.smtpPort) === 465,
  auth: {
    user: env.mail.smtpEmail,
    pass: env.mail.smtpPassword,
  },
});

module.exports = transporter;
