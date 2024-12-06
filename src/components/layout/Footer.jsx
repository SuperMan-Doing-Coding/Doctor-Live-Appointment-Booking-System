
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-blue-800 text-white py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">DoctorConnect</h2>
          <p className="text-gray-300 text-sm">
            Connecting you with the best healthcare professionals around the clock.
          </p>
          <div className="flex items-center space-x-2 text-sm">
            <MdLocationOn className="text-blue-400" />
            <span>123 Medical Plaza, Healthcare City</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MdPhone className="text-blue-400" />
            <span>+1 234 567 8900</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MdEmail className="text-blue-400" />
            <span>contact@doctorconnect.com</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-300 hover:text-blue-400 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/doctors" className="text-gray-300 hover:text-blue-400 transition duration-300">
                Find Doctors
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-300 hover:text-blue-400 transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-blue-400 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li className="text-gray-300">Online Consultation</li>
            <li className="text-gray-300">Emergency Care</li>
            <li className="text-gray-300">Medical Tourism</li>
            <li className="text-gray-300">Health Packages</li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition duration-300">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="bg-blue-500 p-2 rounded-full hover:bg-blue-400 transition duration-300">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="bg-pink-600 p-2 rounded-full hover:bg-pink-500 transition duration-300">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition duration-300">
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">Subscribe to Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md text-gray-800 w-full focus:outline-none"
              />
              <button className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-400 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-blue-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} DoctorConnect. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm text-gray-300 hover:text-blue-400 transition duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-300 hover:text-blue-400 transition duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
