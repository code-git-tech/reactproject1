// src/components/HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();


  return (
    <section className="text-gray-700">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 py-12">

        {/* ─── Left text & buttons ──────────────────────────────────────────────── */}
        <div className="md:w-1/2 flex flex-col md:items-start text-left mb-10 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Health, Our Priority
          </h1>
          
          <p className="mb-6 leading-relaxed text-lg">
            Book your appointment with our expert doctors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* 🔗 LOGIN / BOOK button */}
            <button
              onClick={() => navigate('/login')}
              className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition"
            >
              Book Appointment
            </button>

            {/* maybe a signup / doctors list later */}
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-teal-600 border border-teal-500 py-2 px-6 rounded hover:bg-gray-100 transition"
            >
              View Doctors
            </button>
          </div>
        </div>

        {/* ─── Right banner image ─────────────────────────────────────────────── */}
        <div className="md:w-1/2">
          <img
            className="rounded-lg shadow-lg"
            src="https://i.postimg.cc/Hk4tykNn/doctor-appointment-banner-png.png"
            alt="Doctor"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
