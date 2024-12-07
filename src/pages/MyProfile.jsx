import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Heart, 
  Activity,
  FileText,
  AlertCircle,
  Clock
} from 'lucide-react';
import Paitent from '../assets/pexels-kebs-visuals-742415-3992656.jpg';

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Dummy patient data - replace with actual patient data
  const patientData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    address: "123 Main Street, City",
    dateOfBirth: "15-05-1990",
    bloodGroup: "O+",
    weight: "70 kg",
    height: "175 cm",
    allergies: ["Penicillin", "Peanuts"],
    emergencyContact: {
      name: "Jane Doe",
      relation: "Spouse",
      phone: "+91 9876543211"
    },
    profileImage: Paitent
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <img
              src={patientData.profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
              <User size={16} />
            </button>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-900">{patientData.name}</h1>
            <p className="text-gray-500">Patient ID: P-12345</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Blood Group: {patientData.bloodGroup}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b mb-6 overflow-x-auto">
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${
            activeTab === 'profile'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Personal Details
        </button>
        <button
          onClick={() => setActiveTab('medical')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${
            activeTab === 'medical'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Medical History
        </button>
        <button
          onClick={() => setActiveTab('appointments')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${
            activeTab === 'appointments'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Past Appointments
        </button>
      </div>

      {/* Content Sections */}
      <div className="bg-white rounded-xl shadow-sm">
        {activeTab === 'profile' && (
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="flex items-center gap-3">
                  <User className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">{patientData.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{patientData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{patientData.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium">{patientData.dateOfBirth}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">{patientData.address}</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{patientData.emergencyContact.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Relation</p>
                    <p className="font-medium">{patientData.emergencyContact.relation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{patientData.emergencyContact.phone}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'medical' && (
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Basic Health Info */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Health Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Heart className="text-gray-400" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Blood Group</p>
                      <p className="font-medium">{patientData.bloodGroup}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Activity className="text-gray-400" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Weight</p>
                      <p className="font-medium">{patientData.weight}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Activity className="text-gray-400" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Height</p>
                      <p className="font-medium">{patientData.height}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Allergies */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Allergies</h2>
                <div className="flex flex-wrap gap-2">
                  {patientData.allergies.map((allergy, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                    >
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
            <div className="space-y-4">
              {/* Sample past appointments - replace with actual data */}
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Dr. Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Cardiologist</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Clock size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-500">15 March 2024, 10:30 AM</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Completed
                  </span>
                </div>
              </div>
              {/* Add more past appointments as needed */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;