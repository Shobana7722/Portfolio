const asyncHandler = require('../utils/asyncHandler');
const { sendSuccess } = require('../utils/responseHandler');
const User = require('../models/User');

exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  sendSuccess(res, users);
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  sendSuccess(res, user);
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  sendSuccess(res, user);
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);
  sendSuccess(res, {}, 200, 'User deleted');
});
