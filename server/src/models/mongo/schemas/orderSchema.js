const mongoose = require("mongoose");

const productSchema = require("./productSchema");
const userSchema = require("./userSchema");

const orderSchema = mongoose.Schema({
    user: userSchema,
    products: [productSchema],
    date: {
        type: Date,
        // required: true,
    }
});

module.exports = orderSchema;

