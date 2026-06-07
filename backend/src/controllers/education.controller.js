const asyncHandler = require('../utils/asyncHandler');
const { sendSuccess, ErrorResponse } = require('../utils/responseHandler');
const Education = require('../models/Education');

exports.getEducations = asyncHandler(async (req, res, next) => {
  const educations = await Education.find().sort('-from');
  sendSuccess(res, educations);
});

exports.createEducation = asyncHandler(async (req, res, next) => {
  const education = await Education.create(req.body);
  sendSuccess(res, education, 201);
});

exports.updateEducation = asyncHandler(async (req, res, next) => {
  const education = await Education.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!education) throw new ErrorResponse('Not found', 404);
  sendSuccess(res, education);
});

exports.deleteEducation = asyncHandler(async (req, res, next) => {
  const education = await Education.findById(req.params.id);
  if (!education) throw new ErrorResponse('Not found', 404);
  await education.deleteOne();
  sendSuccess(res, {}, 200, 'Deleted');
});
