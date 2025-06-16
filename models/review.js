const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: String,
  reviewDate: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);


