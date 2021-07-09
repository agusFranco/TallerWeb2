const Joi = require("@hapi/joi");

const verifyValidator = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  code: Joi.string().required()
});

module.exports = verifyValidator;
