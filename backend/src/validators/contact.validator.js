const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().required().min(2).max(50),
  email: Joi.string().email().required(),
  subject: Joi.string().required().max(100),
  message: Joi.string().required().max(1000)
});

module.exports = {
  contactSchema
};
