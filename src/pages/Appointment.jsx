import React, { useContext, useState, useEffect } from "react";
import { doctors } from "../assets/assets";
import { useParams } from "react-router-dom";
import {AppContext} from '../context/AppContext'
const Appointment = () => {
  const {docId} = useParams()
  const {doctors} = useContext(AppContext)



  useEffect(() => {
    // Scroll to top of the page when component mounts
    window.scrollTo(0, 0)
  }, [])

    // now creating the state variable
    const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async()=>{
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(()=>{
    fetchDocInfo()
  }, [doctors, docId])

  // Add new state for form
  const [formData, setFormData] = useState({
    patientName: "",
    date: "",
    time: "",
    problem: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your appointment booking logic here
    console.log("Appointment Data:", formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {docInfo ? (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Doctor Details Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={docInfo.image}
              alt={docInfo.name}
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-2xl font-bold text-center mb-4">{docInfo.name}</h2>
            <div className="space-y-2">
              <p><span className="font-semibold">Specialization:</span> {docInfo.specialization}</p>
              <p><span className="font-semibold">Experience:</span> {docInfo.experience} years</p>
              <p><span className="font-semibold">Fees:</span> ${docInfo.fees}</p>
              <p><span className="font-semibold">Rating:</span> {docInfo.rating}/5</p>
            </div>
          </div>

          {/* Appointment Booking Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Book Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1">Patient Name</label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Problem Description</label>
                <textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
};

export default Appointment;
