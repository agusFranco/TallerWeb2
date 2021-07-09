const { string } = require("@hapi/joi");
const mongoose = require("mongoose");

const productSchema = require("./productSchema");
const userSchema = require("./userSchema");

const orderSchema = mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    user: userSchema,
    products: [productSchema],
    date: {
        type: Date,
        // required: true,
    }
});

module.exports = orderSchema;

