const Joi = require('joi');

const profileSchema = Joi.object({
  title: Joi.string().required().max(100),
  bio: Joi.string().required().max(500),
  location: Joi.string().max(100).allow(''),
  avatar: Joi.string().allow(''),
  resumeUrl: Joi.string().uri().allow('')
});

module.exports = {
  profileSchema
};
