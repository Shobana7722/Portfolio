const asyncHandler = require('../utils/asyncHandler');
const { sendSuccess } = require('../utils/responseHandler');
const skillService = require('../services/skill.service');

exports.getSkills = asyncHandler(async (req, res, next) => {
  const skills = await skillService.getAllSkills();
  sendSuccess(res, skills);
});

exports.createSkill = asyncHandler(async (req, res, next) => {
  const skill = await skillService.createSkill(req.body);
  sendSuccess(res, skill, 201);
});

exports.updateSkill = asyncHandler(async (req, res, next) => {
  const skill = await skillService.updateSkill(req.params.id, req.body);
  sendSuccess(res, skill);
});

exports.deleteSkill = asyncHandler(async (req, res, next) => {
  await skillService.deleteSkill(req.params.id);
  sendSuccess(res, {}, 200, 'Skill deleted successfully');
});
