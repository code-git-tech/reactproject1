
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/appointments')
      .then(res => setAppointments(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/appointments/${id}`)
      .then(() => {
        setAppointments(appointments.filter(appt => appt._id !== id));
      });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-teal-600">All Appointments</h2>
      {appointments.map((appt) => (
        <div key={appt._id} className="bg-green-200 p-4 rounded shadow mb-3 flex justify-between items-center">
          <div>
            <p><strong>Name:</strong> {appt.name}</p>
            <p><strong>Doctor:</strong> {appt.doctor}</p>
            <p><strong>Date:</strong> {appt.date} | <strong>Time:</strong> {appt.time}</p>
          </div>
          <div>
            <Link to={`/appointments/editappointment/${appt._id}`}>
              <button className="bg-yellow-400 px-3 py-1 rounded mr-2 hover:bg-yellow-500">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(appt._id)}
              className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
