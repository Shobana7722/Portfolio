const asyncHandler = require('../utils/asyncHandler');
const { sendSuccess } = require('../utils/responseHandler');
const contactService = require('../services/contact.service');

exports.getContacts = asyncHandler(async (req, res, next) => {
  const contacts = await contactService.getAllContacts();
  sendSuccess(res, contacts);
});

exports.createContact = asyncHandler(async (req, res, next) => {
  const contact = await contactService.createContact(req.body);
  sendSuccess(res, contact, 201, 'Message sent successfully');
});

exports.markAsRead = asyncHandler(async (req, res, next) => {
  const contact = await contactService.markAsRead(req.params.id);
  sendSuccess(res, contact);
});

exports.deleteContact = asyncHandler(async (req, res, next) => {
  await contactService.deleteContact(req.params.id);
  sendSuccess(res, {}, 200, 'Contact message deleted successfully');
});
