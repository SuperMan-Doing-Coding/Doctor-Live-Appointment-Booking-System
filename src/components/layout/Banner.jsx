import React from 'react';
import appointmentImag from '../../assets/appointment_img.png'
import { useNavigate } from 'react-router-dom';
const Banner = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between bg-blue-50 p-8 rounded-lg shadow-md">
      {/* Left Side - Create Account Button */}
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Book Your Appointment Today!</h1>
        <p className="text-gray-600">
          Sign up now and get access to top doctors at your convenience.
        </p>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all">
          Create Account
        </button>
      </div>

      {/* Right Side - Doctor Image */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          src={appointmentImag} // Replace with the actual path to your doctor image
          alt="Doctor"
          className="w-full bottom-0 right-0 max-w-md h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
