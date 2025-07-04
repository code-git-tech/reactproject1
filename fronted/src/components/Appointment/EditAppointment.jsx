import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditAppointment = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // <-- Get ID from URL

  const [formData, setFormData] = useState({
    name: '',
    doctor: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    // Dummy fetch by ID (replace with actual fetch from backend if needed)
    const dummyData = {
      1: { name: 'Yashvi Bateria', doctor: 'Dr. Mehta', date: '2025-07-04', time: '10:30' },
      2: { name: 'Priya Sharma', doctor: 'Dr. Rao', date: '2025-07-05', time: '14:00' }
    };

    setFormData(dummyData[id] || {
      name: '',
      doctor: '',
      date: '',
      time: ''
    });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment ${id} Updated (Dummy)`);
    navigate('/appointments');
  };

  return (
    <div className="p-6 min-h-screen bg-emerald-50">
      <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4 text-teal-600">Edit Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            className="w-full p-2 border mb-3 rounded"
            onChange={handleChange}
            placeholder="Patient Name"
          />
          <input
            name="doctor"
            value={formData.doctor}
            className="w-full p-2 border mb-3 rounded"
            onChange={handleChange}
            placeholder="Doctor Name"
          />
          <input
            name="date"
            type="date"
            value={formData.date}
            className="w-full p-2 border mb-3 rounded"
            onChange={handleChange}
          />
          <input
            name="time"
            type="time"
            value={formData.time}
            className="w-full p-2 border mb-3 rounded"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
          >
            Update Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAppointment;


