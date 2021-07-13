const Joi = require("@hapi/joi");

const forgotPasswordValidator = Joi.object({
  email: Joi.string().min(6).max(255).required().email()
});

module.exports = forgotPasswordValidator;
