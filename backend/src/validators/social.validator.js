const Joi = require('joi');

const socialSchema = Joi.object({
  platform: Joi.string().required().max(50),
  url: Joi.string().uri().required(),
  icon: Joi.string().allow(''),
  isActive: Joi.boolean(),
  order: Joi.number().integer()
});

module.exports = {
  socialSchema
};
