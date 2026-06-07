const asyncHandler = require('../utils/asyncHandler');
const { sendSuccess } = require('../utils/responseHandler');
const { sendTokenResponse } = require('../utils/jwt');
const authService = require('../services/auth.service');

exports.register = asyncHandler(async (req, res, next) => {
  const user = await authService.register(req.body);
  sendTokenResponse(user, 201, res);
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await authService.login(email, password);
  sendTokenResponse(user, 200, res);
});

exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await authService.getMe(req.user.id);
  sendSuccess(res, user);
});
