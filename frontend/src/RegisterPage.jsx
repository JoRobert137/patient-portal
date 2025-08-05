import React, { useState } from 'react';
import axios from 'axios';

const API_BASE = 'https://patient-portal-laha.onrender.com';

function RegisterPage({ setPatientId }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${API_BASE}/register`, formData);
      setPatientId(res.data.patient._id);
      alert('Registration successful! You can now book tests.');
    } catch (err) {
      alert(err.response?.data?.msg || 'Registration failed.');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
          onChange={e => setFormData({ ...formData, password: e.target.value })}
        />
        <button
          onClick={handleRegister}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
