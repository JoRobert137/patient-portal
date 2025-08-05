import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = 'https://patient-portal-laha.onrender.com';

function LabTestsPage({ patientId }) {
  const [labTests, setLabTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const res = await axios.get(`${API_BASE}/tests`);
        setLabTests(res.data);
      } catch (err) {
        console.error('Error fetching lab tests:', err);
      }
    };
    fetchTests();
  }, []);

  const handleBook = async (testId) => {
    if (!patientId) return alert('Please register first.');
    try {
      await axios.post(`${API_BASE}/bookings`, { patientId, testId });
      alert('Test booked!');
    } catch (err) {
      console.error('Booking failed:', err);
      alert('Booking failed.');
    }
  };

  return (
    <div>
      <h2>Available Lab Tests</h2>
      <ul>
        {labTests.map(test => (
          <li key={test._id} style={{ marginBottom: '1rem' }}>
            <strong>{test.name}</strong><br />
            {test.description}<br />
            <em>Sample: {test.sampleType}</em><br />
            Price: ₹{test.price}
            <br />
            <button onClick={() => handleBook(test._id)} style={{ marginTop: '5px' }}>
              Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LabTestsPage;
