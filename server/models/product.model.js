const mongoose = require("mongoose");

//schema for product details
const ProductDetails = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const product = mongoose.model("Products", ProductDetails);

module.exports = {
  product
};
