import React from 'react';

const ServicesSection = () => {
  return (
    <section className="text-gray-700">
      <div className="container px-5 py-16 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Specialties</h2>
          <p className="text-gray-600 mt-2">
            We cover a wide range of medical services for all age groups.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'General Checkup', desc: 'Regular health checkups and consultation.' },
            { title: 'Pediatrics', desc: 'Child health specialists and care.' },
            { title: 'Cardiology', desc: 'Heart specialist consultations and care.' },
          ].map((service, index) => (
             <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
    ...
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
