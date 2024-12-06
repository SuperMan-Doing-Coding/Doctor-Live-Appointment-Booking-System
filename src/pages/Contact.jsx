import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We're here to help! Reach out to us anytime, and we'll happily answer your questions.
        </p>
      </div>

      {/* Contact Form and Info */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-lg py-2 font-medium hover:bg-red-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10l1.664 1.664a9.017 9.017 0 006.35 2.726M9 21a9.016 9.016 0 002.735-6.358L13.4 16.4a2 2 0 102.828-2.828l1.616-1.616A2 2 0 0021 11l2-2M21 11a7.936 7.936 0 01-.582 3.224M15 3v3m0 0h-3m3 0h3"
                />
              </svg>
            </div>
            <p className="text-gray-800 text-lg">+1 234 567 890</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 4a4 4 0 00-8 0m8 0v4a4 4 0 01-4 4 4 4 0 01-4-4V4m12 0v4c0 1.1-.9 2-2 2s-2-.9-2-2V4m-4 8v2m-2 4h4"
                />
              </svg>
            </div>
            <p className="text-gray-800 text-lg">info@example.com</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
            </div>
            <p className="text-gray-800 text-lg">
              123 Main Street, New York, NY 10001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
