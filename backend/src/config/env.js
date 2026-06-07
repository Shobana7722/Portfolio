const path = require("path");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

module.exports = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpire: process.env.JWT_EXPIRE,
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
  mail: {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpEmail: process.env.SMTP_EMAIL,
    smtpPassword: process.env.SMTP_PASSWORD,
    fromEmail: process.env.FROM_EMAIL,
    fromName: process.env.FROM_NAME,
    contactEmail: process.env.CONTACT_EMAIL,
  },
  notification: {
    twilio: {
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
      fromPhone: process.env.TWILIO_FROM_PHONE,
    },
    ownerPhone: process.env.OWNER_PHONE,
  },
};
