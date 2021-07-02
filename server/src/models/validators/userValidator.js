const Joi = require("@hapi/joi");
const addressValidator = require("./addressValidator");

const userValidator = Joi.object({
  firstName: Joi.string().min(6).max(255).required(),
  lastName: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  address: addressValidator,
});

module.exports = userValidator;
