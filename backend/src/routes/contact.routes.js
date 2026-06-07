const express = require('express');
const {
  getContacts,
  createContact,
  markAsRead,
  deleteContact
} = require('../controllers/contact.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/admin.middleware');
const validate = require('../middleware/validate.middleware');
const { contactSchema } = require('../validators/contact.validator');

const router = express.Router();

router.route('/')
  .get(protect, authorize('admin'), getContacts)
  .post(validate(contactSchema), createContact);

router.route('/:id')
  .put(protect, authorize('admin'), markAsRead)
  .delete(protect, authorize('admin'), deleteContact);

module.exports = router;
