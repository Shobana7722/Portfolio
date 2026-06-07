const Joi = require('joi');

const skillSchema = Joi.object({
  name: Joi.string().required().max(50),
  category: Joi.string().valid('Frontend', 'Backend', 'Database', 'Tools', 'Other').required(),
  proficiency: Joi.number().integer().min(1).max(100),
  icon: Joi.string().allow(''),
  order: Joi.number().integer()
});

module.exports = {
  skillSchema
};
