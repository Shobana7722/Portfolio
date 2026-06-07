const asyncHandler = require('../utils/asyncHandler');
const { sendSuccess, ErrorResponse } = require('../utils/responseHandler');
const Resume = require('../models/Resume');

exports.getResumes = asyncHandler(async (req, res, next) => {
  const resumes = await Resume.find().sort('-createdAt');
  sendSuccess(res, resumes);
});

exports.createResume = asyncHandler(async (req, res, next) => {
  const resume = await Resume.create(req.body);
  sendSuccess(res, resume, 201);
});

exports.updateResume = asyncHandler(async (req, res, next) => {
  const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!resume) throw new ErrorResponse('Not found', 404);
  sendSuccess(res, resume);
});

exports.deleteResume = asyncHandler(async (req, res, next) => {
  const resume = await Resume.findById(req.params.id);
  if (!resume) throw new ErrorResponse('Not found', 404);
  await resume.deleteOne();
  sendSuccess(res, {}, 200, 'Deleted');
});
