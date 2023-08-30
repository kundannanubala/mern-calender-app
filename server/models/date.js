// date.model.js
const mongoose = require('mongoose');

const dateSchema = new mongoose.Schema({
  date: { type: Date, required: true }, // Change the type to Date
  timeSlots: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TimeSlot' }],
  isBooked: { type: Boolean, default: false }, // Track availability
});

module.exports = mongoose.model('Date', dateSchema);
