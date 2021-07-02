const mongoose = require("mongoose");
const addressSchema = require("./address");

const userSchema = mongoose.Schema({
  cognitoId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  lastName: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  address: addressSchema,
});

module.exports = mongoose.model("User", userSchema);
