const Joi = require("@hapi/joi");

const forgotPasswordConfirmValidator = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  code: Joi.string().required(),
  password: Joi.string().min(6).max(255).required(),
});

module.exports = forgotPasswordConfirmValidator;
