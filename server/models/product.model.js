const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [2, "{PATH} must be at least 2 characters"],
        // default:  "no title"
    },
    price : {
        type: Number,
        min : [0, "{PATH} cannot be negative, you gave {VALUE}"]
    },
    description : {
        type: String,
        required : [true, "{PATH} is required"],
        minlength : [3, "{PATH} must be at least 3 characters"]
    }
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;