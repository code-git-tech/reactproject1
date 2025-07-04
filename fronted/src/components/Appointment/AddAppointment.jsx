
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddAppointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    doctor: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/appointments', formData);
    navigate('/appointments');
  };

  return (
    <div className="p-6 min-h-screen bg-emerald-50">
      <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4 text-teal-600">Add New Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Patient Name" className="w-full p-2 border mb-3 rounded" onChange={handleChange} />
          <input name="doctor" placeholder="Doctor Name" className="w-full p-2 border mb-3 rounded" onChange={handleChange} />
          <input name="date" type="date" className="w-full p-2 border mb-3 rounded" onChange={handleChange} />
          <input name="time" type="time" className="w-full p-2 border mb-3 rounded" onChange={handleChange} />
          <button type="submit" className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600">Add Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default AddAppointment;
