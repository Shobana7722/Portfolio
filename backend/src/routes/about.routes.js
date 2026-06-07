const express = require('express');
const { getAbout, upsertAbout } = require('../controllers/about.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/admin.middleware');
const validate = require('../middleware/validate.middleware');
const { aboutSchema } = require('../validators/about.validator');

const router = express.Router();

router.route('/')
  .get(getAbout)
  .post(protect, authorize('admin'), validate(aboutSchema), upsertAbout)
  .put(protect, authorize('admin'), validate(aboutSchema), upsertAbout);

module.exports = router;
