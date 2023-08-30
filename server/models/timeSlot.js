const mongoose = require('mongoose');
const timeSlotSchema = new mongoose.Schema({
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    date: { type: mongoose.Schema.Types.ObjectId, ref: 'Date' },
    isBooked: { type: Boolean, default: false }, // Track availability
  });
module.exports=mongoose.model('TimeSlot',timeSlotSchema);