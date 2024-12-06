import React from 'react'
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
            {/* Left Side */}
            <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                    Book Appointment <br />
                    <span className="text-indigo-600">With Trusted Doctors</span>
                </h1>

                <div className="flex items-center space-x-4 mb-6">
                    <img
                        src={assets.group_profiles}
                        alt='Group Picture'
                        className="w-24 h-12 object-cover rounded-lg"
                    />
                    <p className="text-gray-600 text-sm">1000+ Trusted Doctors</p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                    Welcome to Live Doctor Appointment System. Our platform makes healthcare
                    simple and accessible. Book appointments with trusted doctors effortlessly
                    and enjoy live chat support for your medical concerns—all in one place.
                </p>

                <a
                    href='#speciality'
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white 
                     rounded-full hover:bg-indigo-700 transition-colors duration-300 
                     shadow-md hover:shadow-lg group"
                >
                    <span>Book Appointment</span>
                    <img
                        src={assets.arrow_icon}
                        alt="Arrow"
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                </a>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 flex justify-center">
                <img
                    src={assets.header_img}
                    alt="Header Illustration"
                    className="w-full max-w-md object-contain animate-float"
                />
            </div>
        </div>
    )
}

export default Header