const express = require('express');
const { getSettings, updateSettings } = require('../controllers/settings.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/admin.middleware');

const router = express.Router();

router.route('/')
  .get(getSettings)
  .post(protect, authorize('admin'), updateSettings)
  .put(protect, authorize('admin'), updateSettings);

module.exports = router;
