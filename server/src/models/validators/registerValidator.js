const Joi = require("@hapi/joi");
const addressValidator = require("./addressValidator");

const registerValidator = Joi.object({
  firstName: Joi.string().min(6).max(255).required(),
  lastName: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(12).required(),
  address: addressValidator,
});

module.exports = registerValidator;
