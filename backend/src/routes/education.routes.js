const express = require('express');
const {
  getEducations,
  createEducation,
  updateEducation,
  deleteEducation
} = require('../controllers/education.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/admin.middleware');

const router = express.Router();

router.route('/')
  .get(getEducations)
  .post(protect, authorize('admin'), createEducation);

router.route('/:id')
  .put(protect, authorize('admin'), updateEducation)
  .delete(protect, authorize('admin'), deleteEducation);

module.exports = router;
