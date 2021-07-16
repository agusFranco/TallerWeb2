const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    imageUrl: {
        type: String
    },
    category: {
        type: String
    }
});

module.exports = productSchema;

