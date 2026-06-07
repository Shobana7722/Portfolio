const asyncHandler = require('../utils/asyncHandler');
const { sendSuccess, ErrorResponse } = require('../utils/responseHandler');
const Experience = require('../models/Experience');

exports.getExperiences = asyncHandler(async (req, res, next) => {
  const experiences = await Experience.find().sort('-from');
  sendSuccess(res, experiences);
});

exports.createExperience = asyncHandler(async (req, res, next) => {
  const experience = await Experience.create(req.body);
  sendSuccess(res, experience, 201);
});

exports.updateExperience = asyncHandler(async (req, res, next) => {
  const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!experience) throw new ErrorResponse('Not found', 404);
  sendSuccess(res, experience);
});

exports.deleteExperience = asyncHandler(async (req, res, next) => {
  const experience = await Experience.findById(req.params.id);
  if (!experience) throw new ErrorResponse('Not found', 404);
  await experience.deleteOne();
  sendSuccess(res, {}, 200, 'Deleted');
});
