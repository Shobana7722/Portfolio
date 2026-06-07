const asyncHandler = require('../utils/asyncHandler');
const { sendSuccess } = require('../utils/responseHandler');
const aboutService = require('../services/about.service');

exports.getAbout = asyncHandler(async (req, res, next) => {
  const about = await aboutService.getAbout();
  sendSuccess(res, about);
});

exports.upsertAbout = asyncHandler(async (req, res, next) => {
  const about = await aboutService.createOrUpdateAbout(req.body);
  sendSuccess(res, about);
});
