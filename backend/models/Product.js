const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  
  productID: { type: Number, required: true, unique: true },
  productName: { type: String, required: true },
  description: String,
  category: String,
  price: { type: Number, required: true },
  stockQuantity: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  productImages: [String], // Array of image URLs

});

const productModel = model('Products', productSchema);

module.exports = productModel;