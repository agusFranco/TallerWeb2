const Joi = require("@hapi/joi");

const loginValidator = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(255).required(),
});

module.exports = loginValidator;
