const Joi = require('joi');

const aboutSchema = Joi.object({
  content: Joi.string().required(),
  highlights: Joi.array().items(Joi.string())
});

module.exports = {
  aboutSchema
};
