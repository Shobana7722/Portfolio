const Joi = require('joi');

const projectSchema = Joi.object({
  title: Joi.string().required().max(100),
  description: Joi.string().required(),
  technologies: Joi.array().items(Joi.string()).min(1).required(),
  imageUrl: Joi.string().allow(''),
  gallery: Joi.array().items(Joi.string()),
  githubUrl: Joi.string().uri().allow(''),
  liveUrl: Joi.string().uri().allow(''),
  featured: Joi.boolean()
});

module.exports = {
  projectSchema
};
