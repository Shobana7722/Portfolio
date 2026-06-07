const asyncHandler = require('../utils/asyncHandler');
const { sendSuccess } = require('../utils/responseHandler');
const socialService = require('../services/social.service');

exports.getLinks = asyncHandler(async (req, res, next) => {
  const links = await socialService.getLinks();
  sendSuccess(res, links);
});

exports.createLink = asyncHandler(async (req, res, next) => {
  const link = await socialService.createLink(req.body);
  sendSuccess(res, link, 201);
});

exports.updateLink = asyncHandler(async (req, res, next) => {
  const link = await socialService.updateLink(req.params.id, req.body);
  sendSuccess(res, link);
});

exports.deleteLink = asyncHandler(async (req, res, next) => {
  await socialService.deleteLink(req.params.id);
  sendSuccess(res, {}, 200, 'Link deleted');
});
