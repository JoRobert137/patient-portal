const mongoose = require('mongoose');

const labTestSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  sampleType : String
});

module.exports = mongoose.model('LabTest', labTestSchema);
