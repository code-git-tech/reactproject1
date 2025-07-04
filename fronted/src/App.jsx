

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CallToAction from './components/CallToAction';

import Login from './components/Login';
import Signup from './components/Signup';

import AppointmentList from './components/Appointment/AppointmentList';
import AddAppointment from './components/Appointment/AddAppointment';
import EditAppointment from './components/Appointment/EditAppointment';
import ContactUs from './components/pages/ContactUs';
import Doctors from './components/pages/Doctors';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CallToAction />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <div className="pt-20 pb-24 min-h-screen bg-gray-50 font-poppins">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
          <Route path="/appointments/editappointment/:id" element={<EditAppointment />} />

          <Route path="/appointments" element={<AppointmentList />} />
          <Route path="/appointments/add" element={<AddAppointment />} />
          <Route path="/appointments/edit" element={<EditAppointment />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/doctors" element={<Doctors />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;