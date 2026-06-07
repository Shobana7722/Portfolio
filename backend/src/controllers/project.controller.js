const asyncHandler = require('../utils/asyncHandler');
const { sendSuccess } = require('../utils/responseHandler');
const projectService = require('../services/project.service');

exports.getProjects = asyncHandler(async (req, res, next) => {
  const projects = await projectService.getAllProjects(req.query);
  sendSuccess(res, projects);
});

exports.getProject = asyncHandler(async (req, res, next) => {
  const project = await projectService.getProjectById(req.params.id);
  sendSuccess(res, project);
});

exports.createProject = asyncHandler(async (req, res, next) => {
  const project = await projectService.createProject(req.body);
  sendSuccess(res, project, 201);
});

exports.updateProject = asyncHandler(async (req, res, next) => {
  const project = await projectService.updateProject(req.params.id, req.body);
  sendSuccess(res, project);
});

exports.deleteProject = asyncHandler(async (req, res, next) => {
  await projectService.deleteProject(req.params.id);
  sendSuccess(res, {}, 200, 'Project deleted successfully');
});
