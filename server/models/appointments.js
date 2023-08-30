const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: mongoose.Schema.Types.ObjectId, ref: 'Date', required: true },
  timeSlot: { type: mongoose.Schema.Types.ObjectId, ref: 'TimeSlot', required: true },
  isCancelled: { type: Boolean, default: false }, // New field
});

module.exports = mongoose.model('Appointment', appointmentSchema);


