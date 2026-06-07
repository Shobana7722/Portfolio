const express = require('express');
const {
  getResumes,
  createResume,
  updateResume,
  deleteResume
} = require('../controllers/resume.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/admin.middleware');
const upload = require('../middleware/upload.middleware');

const router = express.Router();

router.route('/')
  .get(getResumes)
  .post(protect, authorize('admin'), upload.single('resume'), createResume);

router.route('/:id')
  .put(protect, authorize('admin'), upload.single('resume'), updateResume)
  .delete(protect, authorize('admin'), deleteResume);

module.exports = router;
