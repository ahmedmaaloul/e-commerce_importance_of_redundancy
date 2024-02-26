const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: String,
  products: [{ productId: String, quantity: Number }],
  totalPrice: Number,
});

module.exports = mongoose.model('Cart', cartSchema);
