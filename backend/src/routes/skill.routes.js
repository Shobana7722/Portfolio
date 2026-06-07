const express = require('express');
const {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill
} = require('../controllers/skill.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/admin.middleware');
const validate = require('../middleware/validate.middleware');
const { skillSchema } = require('../validators/skill.validator');

const router = express.Router();

router.route('/')
  .get(getSkills)
  .post(protect, authorize('admin'), validate(skillSchema), createSkill);

router.route('/:id')
  .put(protect, authorize('admin'), validate(skillSchema), updateSkill)
  .delete(protect, authorize('admin'), deleteSkill);

module.exports = router;
