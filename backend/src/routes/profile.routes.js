const express = require('express');
const { getProfile, upsertProfile } = require('../controllers/profile.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/admin.middleware');
const validate = require('../middleware/validate.middleware');
const { profileSchema } = require('../validators/profile.validator');

const router = express.Router();

router.route('/')
  .get(getProfile)
  .post(protect, authorize('admin'), validate(profileSchema), upsertProfile)
  .put(protect, authorize('admin'), validate(profileSchema), upsertProfile);

module.exports = router;
