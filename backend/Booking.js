const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'LabTest' },
  date: { type: Date, default: Date.now },
  status: { type: String }
});

module.exports = mongoose.model('Booking', bookingSchema);