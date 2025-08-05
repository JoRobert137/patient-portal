import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = 'https://patient-portal-laha.onrender.com';

function BookingHistoryPage({ patientId }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (patientId) {
      axios.get(`${API_BASE}/tests/${patientId}`).then(res => setBookings(res.data));
    }
  }, [patientId]);

  return (
    <div>
      <h2>Booking History</h2>
      {!patientId && <p>Please register first.</p>}
      <ul>
        {bookings.map(b => (
          <li key={b._id}>
            {b.test.name} on {new Date(b.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingHistoryPage;
