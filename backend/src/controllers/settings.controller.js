const asyncHandler = require('../utils/asyncHandler');
const { sendSuccess } = require('../utils/responseHandler');
const Setting = require('../models/Setting');

exports.getSettings = asyncHandler(async (req, res, next) => {
  let settings = await Setting.findOne();
  if (!settings) {
    settings = await Setting.create({});
  }
  sendSuccess(res, settings);
});

exports.updateSettings = asyncHandler(async (req, res, next) => {
  let settings = await Setting.findOne();
  if (settings) {
    settings = await Setting.findOneAndUpdate({}, req.body, {
      new: true,
      runValidators: true
    });
  } else {
    settings = await Setting.create(req.body);
  }
  sendSuccess(res, settings);
});
