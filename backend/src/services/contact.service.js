const Contact = require("../models/Contact");
const { ErrorResponse } = require("../utils/responseHandler");
const mailService = require("./mail.service");
const smsService = require("./sms.service");
const env = require("../config/env");

class ContactService {
  async getAllContacts() {
    return await Contact.find().sort("-createdAt");
  }

  async createContact(data) {
    const contact = await Contact.create(data);

    // Send email notification to site owner (if configured)
    const ownerEmail = env.mail && env.mail.contactEmail;
    if (ownerEmail) {
      try {
        await mailService.sendEmail({
          email: ownerEmail,
          subject: `New contact message from ${contact.name || contact.email}`,
          message: `You have a new message:\n\nName: ${contact.name || "-"}\nEmail: ${contact.email || "-"}\nMessage: ${contact.message || "-"}\n\nView in admin panel to mark as read.`,
        });
      } catch (err) {
        console.error("Failed sending contact notification email", err);
      }
    }

    // Send SMS notification to owner's mobile (if configured)
    const ownerPhone = env.notification && env.notification.ownerPhone;
    if (ownerPhone) {
      try {
        await smsService.sendSMS({
          to: ownerPhone,
          body: `New message from ${contact.name || contact.email}: ${(contact.message || "").slice(0, 120)}`,
        });
      } catch (err) {
        console.error("Failed sending SMS notification", err);
      }
    }

    return contact;
  }

  async markAsRead(id) {
    const contact = await Contact.findByIdAndUpdate(
      id,
      { read: true },
      { new: true },
    );
    if (!contact) throw new ErrorResponse("Contact not found", 404);
    return contact;
  }

  async deleteContact(id) {
    const contact = await Contact.findById(id);
    if (!contact) throw new ErrorResponse("Contact not found", 404);
    await contact.deleteOne();
    return contact;
  }
}

module.exports = new ContactService();
