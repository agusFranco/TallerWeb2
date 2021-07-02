const Joi = require("@hapi/joi");

const orderValidator = Joi.object({
  userId: Joi.string().min(1).max(255).required(),
  products: Joi.array().required(),
  date: Joi.date().required()
});

module.exports = orderValidator;
