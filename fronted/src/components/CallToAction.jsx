import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-teal-500 text-white py-8 sm:py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-3">Book Your Appointment Today!</h2>
        <p className="mb-6">Quick, hassle-free online doctor booking at your fingertips.</p>
        <button className="bg-white text-teal-600 font-semibold py-2 px-8 rounded hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
