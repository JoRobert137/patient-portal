const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Patient=require("./Patient.js")
const LabTest = require('./LabTest');
const bcrypt=require('bcryptjs')
const jwt=require("jsonwebtoken")
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(8000, () => console.log('Server running on port 8000'));
}).catch(err => console.error(err));


app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await Patient.findOne({ email });
    if (existing) return res.status(400).json({ msg: 'Email already registered' });

    const hash = await bcrypt.hash(password, 10);
    const patient = new Patient({ name, email, passwordHash: hash });
    await patient.save();

    const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET);
    res.json({ token, patient });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/tests', async (req, res) => {
  try {
    const tests = await LabTest.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/bookings', async (req, res) => {
  const { patientId, testId } = req.body;
  try {
    const booking = new Booking({ patientId, testId });
    await booking.save();
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
