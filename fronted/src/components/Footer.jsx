
import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-gray-300">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
          
          {/* About */}
          <div className="md:w-1/3">
            <h3 className="font-bold text-white mb-3">About CareWell</h3>
            <p>
              We are committed to providing the best healthcare experience with professional doctors and modern facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h3 className="font-bold text-white mb-3">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-white transition">Home</a>
              </li>
              <li className="mb-2">
                <a href="/doctors" className="hover:text-white transition">Services</a>
              </li>
              
              <li className="mb-2">
  <Link to="/appointments/add" className="hover:text-teal-600">Book Appointment</Link>
</li>
           <li className="mb-2">
  <Link to="/contact" className="hover:text-teal-600">Contact Us</Link>
</li>


              {/* <li>
                <a href="/ContactUs" className="hover:text-white transition">Contact Us</a>
              </li> */}
            </ul>
          </div>

          {/* Subscribe + Social Icons */}
          <div className="md:w-1/3">
            <h3 className="font-bold text-white mb-3">Stay Updated</h3>
            <input
              type="text"
              placeholder="Your Email"
              className="w-full p-2 mb-2 rounded border border-gray-400 bg-teal-800 text-white placeholder-gray-300"
            />
            <button className="w-full bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
              Subscribe
            </button>

            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start mt-4 gap-4 text-white">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-blue-400 transition text-xl" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-blue-300 transition text-xl" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-400 transition text-xl" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-blue-500 transition text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="bg-teal-800 py-4">
        <div className="text-center text-sm text-gray-300">
          © 2025 Book Appointment. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
