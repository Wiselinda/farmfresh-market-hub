const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true
  },
  name: { type: String, required: true },
  category: String,
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  description: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
