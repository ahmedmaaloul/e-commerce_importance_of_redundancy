const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: String,
  products: [{ productId: String, quantity: Number }],
  totalPrice: Number,
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Order', orderSchema);
