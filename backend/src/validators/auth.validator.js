const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().required().min(2).max(50),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('user', 'admin')
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

module.exports = {
  registerSchema,
  loginSchema
};
