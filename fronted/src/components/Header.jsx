


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/stethoscope.png"
            alt="logo"
            className="w-8 h-8 mr-2"
          />
          <span className="font-bold text-xl">Booking your healthy Life</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-teal-600 md:bg-transparent z-20
            flex flex-col md:flex-row md:items-center md:space-x-6 px-4 md:px-0 py-4 md:py-0
            transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden md:flex'}`}
        >
          <Link to="/" className="py-2 md:py-0 hover:text-gray-200">Home</Link>
          <Link to="/doctors" className="py-2 md:py-0 hover:text-gray-200">Doctors</Link>
          <Link to="/appointments" className="py-2 md:py-0 hover:text-gray-200">Appointments</Link>
          <Link to="/contact" className="py-2 md:py-0 hover:text-gray-200">Contact Us</Link>

          {/* Mobile Buttons */}
          <div className="block md:hidden mt-4 space-y-2">
            <Link to="/login">
              <button className="w-full bg-white text-teal-600 py-1 px-4 rounded hover:bg-teal-600 hover:text-white transition">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="w-full bg-white text-teal-600 py-1 px-4 rounded hover:bg-teal-600 hover:text-white transition">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3">
          <Link to="/login">
            <button className="bg-white text-teal-600 py-1 px-4 rounded hover:bg-teal-600 hover:text-white transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-white text-teal-600 py-1 px-4 rounded hover:bg-teal-600 hover:text-white transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
