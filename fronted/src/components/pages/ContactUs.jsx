
import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen pt-24 pb-24 bg-white px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-teal-600 mb-4">Contact Us</h1>
        <p className="mb-8 text-gray-600">
          We'd love to hear from you! Whether you have a question, feedback, or need support — feel free to reach out.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">📍 Address</h3>
            <p className="text-gray-600">123 Wellness Avenue,<br />Health City, IN 302001</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">📞 Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">📧 Email</h3>
            <p className="text-gray-600">support@carewellclinic.com</p>
          </div>
        </div>

        <form className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-left text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;