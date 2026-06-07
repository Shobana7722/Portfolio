const env = require("../config/env");

class SMSService {
  constructor() {
    this.twilioConfig = env.notification && env.notification.twilio;
    if (this.twilioConfig && this.twilioConfig.accountSid) {
      try {
        const twilio = require("twilio");
        this.client = twilio(
          this.twilioConfig.accountSid,
          this.twilioConfig.authToken,
        );
      } catch (err) {
        console.warn("Twilio library not available or failed to load");
      }
    }
  }

  async sendSMS({ to, body }) {
    if (!this.client) {
      console.warn("Twilio not configured, skipping SMS");
      return;
    }

    const msg = await this.client.messages.create({
      body,
      from: this.twilioConfig.fromPhone,
      to,
    });

    console.log("SMS sent:", msg.sid);
    return msg;
  }
}

module.exports = new SMSService();
