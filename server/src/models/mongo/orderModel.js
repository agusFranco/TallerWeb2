const mongoose = require("mongoose");
const orderSchema = require("./schemas/orderSchema");

module.exports = mongoose.model("Order", orderSchema);
