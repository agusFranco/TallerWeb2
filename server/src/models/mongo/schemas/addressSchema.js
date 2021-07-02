const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  street: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  number: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  country: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  city: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  province: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
});

module.exports = addressSchema;
