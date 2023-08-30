const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bookedAppointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
  // Other user-related fields
});

module.exports= mongoose.model('User', userSchema);
