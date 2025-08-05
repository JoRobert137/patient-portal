import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LabTestsPage from './LabTestsPage';
import BookingHistoryPage from './BookingHistoryPage';

function App() {
  const [patientId, setPatientId] = useState('');

  return (
    <Router>
      <div>
        <header>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Patient Portal</h1>
            <nav className="space-x-4">
              <Link to="/" className="text-gray-700">Register</Link>
              <Link to="/tests" className="text-gray-700">Lab Tests</Link>
              <Link to="/history" className="text-gray-700">Booking History</Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-md p-4">
            <Routes>
              <Route path="/" element={<RegisterPage setPatientId={setPatientId} />} />
              <Route path="/tests" element={<LabTestsPage patientId={patientId} />} />
              <Route path="/history" element={<BookingHistoryPage patientId={patientId} />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
