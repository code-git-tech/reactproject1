// src/components/pages/Doctors.jsx
import React from 'react';

const Doctors = () => {
  return (
    <div className="min-h-screen pt-24 pb-24 bg-white px-4 md:px-8 font-poppins">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-teal-600 mb-4">Our Doctors</h1>
        <p className="mb-8 text-gray-600">
          Meet our expert healthcare professionals committed to your wellness.
        </p>

        {/* Sample doctor cards */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              name: "Dr. Anjali Verma",
              specialization: "Cardiologist",
              image: "https://img.freepik.com/free-photo/portrait-doctor_144627-39363.jpg",
            },
            {
              name: "Dr. Rajat Sharma",
              specialization: "Neurologist",
              image: "https://img.freepik.com/free-photo/young-indian-doctor-man-hospital_1303-29579.jpg",
            },
            {
              name: "Dr. Meera Singh",
              specialization: "Dermatologist",
              image: "https://img.freepik.com/free-photo/portrait-young-woman-doctor-white-coat_1303-29789.jpg",
            },
          ].map((doc, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{doc.name}</h3>
              <p className="text-teal-600">{doc.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
