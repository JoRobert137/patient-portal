const mongoose = require('mongoose');
const LabTest = require('./LabTest');
const dotenv = require('dotenv');
dotenv.config();

const data = [
  {
    name: "Complete Blood Count (CBC)",
    description: "A test to evaluate overall health and detect a wide range of disorders.",
    price: 500,
    sampleType: "Blood"
  },
  {
    name: "Lipid Profile",
    description: "Measures cholesterol and triglyceride levels to assess heart disease risk.",
    price: 700,
    sampleType: "Blood"
  },
  {
    name: "Liver Function Test (LFT)",
    description: "Checks for liver damage or disease.",
    price: 800,
    sampleType: "Blood"
  },
  {
    name: "Thyroid Function Test (TFT)",
    description: "Measures thyroid hormone levels to assess thyroid gland health.",
    price: 600,
    sampleType: "Blood"
  },
  {
    name: "Urine Routine Examination",
    description: "Analyzes urine sample to detect infections or kidney issues.",
    price: 300,
    sampleType: "Urine"
  }
];

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await LabTest.insertMany(data);
    console.log('Lab tests inserted successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error inserting lab tests:', err);
  }
}

seedData();
