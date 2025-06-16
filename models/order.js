const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  totalPrice: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'confirmed', 'delivered'], default: 'pending' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);


