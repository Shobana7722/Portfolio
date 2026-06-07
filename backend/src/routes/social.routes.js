const express = require('express');
const { getLinks, createLink, updateLink, deleteLink } = require('../controllers/social.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/admin.middleware');
const validate = require('../middleware/validate.middleware');
const { socialSchema } = require('../validators/social.validator');

const router = express.Router();

router.route('/')
  .get(getLinks)
  .post(protect, authorize('admin'), validate(socialSchema), createLink);

router.route('/:id')
  .put(protect, authorize('admin'), validate(socialSchema), updateLink)
  .delete(protect, authorize('admin'), deleteLink);

module.exports = router;
