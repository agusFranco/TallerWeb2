const Joi = require("@hapi/joi");

const addressValidator = Joi.object({
  street: Joi.string().min(1).max(255).required(),
  number: Joi.string().min(1).max(255).required(),
  country: Joi.string().min(1).max(255).required(),
  city: Joi.string().min(1).max(255).required(),
  province: Joi.string().min(1).max(255).required(),
});

module.exports = addressValidator;
