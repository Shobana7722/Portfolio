const asyncHandler = require('../utils/asyncHandler');
const { sendSuccess } = require('../utils/responseHandler');
const profileService = require('../services/profile.service');

exports.getProfile = asyncHandler(async (req, res, next) => {
  const profile = await profileService.getProfile();
  sendSuccess(res, profile);
});

exports.upsertProfile = asyncHandler(async (req, res, next) => {
  const profile = await profileService.createOrUpdateProfile(req.body, req.user.id);
  sendSuccess(res, profile);
});
