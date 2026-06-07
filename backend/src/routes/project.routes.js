const express = require('express');
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/project.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/admin.middleware');
const validate = require('../middleware/validate.middleware');
const { projectSchema } = require('../validators/project.validator');
const upload = require('../middleware/upload.middleware');

const router = express.Router();

router.route('/')
  .get(getProjects)
  .post(protect, authorize('admin'), upload.single('projectImage'), validate(projectSchema), createProject);

router.route('/:id')
  .get(getProject)
  .put(protect, authorize('admin'), upload.single('projectImage'), validate(projectSchema), updateProject)
  .delete(protect, authorize('admin'), deleteProject);

module.exports = router;
