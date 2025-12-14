const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  medicineId: {
    type: Number,
  },
  medicineName: {
    type: String,
  },
  strip: {
    type: Number,
  },
  categories: {
    type: String,
  },
  quantityReceived: {
    type: Number,
    default: 0,
  },
  quantityAvailable: {
    type: Number,
    default: 0,
  },
  saledTablets: {
    type: Number,
  },
  expiryDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("medicineSchema", medicineSchema);
