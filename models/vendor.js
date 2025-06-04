const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  contactEmail: { type: String, required: true },
  phone: String,
  location: String,
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Vendor', vendorSchema);
