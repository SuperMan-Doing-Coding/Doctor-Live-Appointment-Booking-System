import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Filter, Search } from 'lucide-react';

const MyAppointment = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy data - replace with your actual appointments data
  const appointments = [
    {
      id: 1,
      doctorName: "Dr. Emily Rodriguez",
      doctorImage: "https://example.com/doctor1.jpg",
      speciality: "Cardiologist",
      date: "2024-03-20",
      time: "10:30 AM",
      location: "Medical Center, Room 204",
      status: "upcoming",
    },
    {
      id: 2,
      doctorName: "Dr. Michael Chen",
      doctorImage: "https://example.com/doctor2.jpg",
      speciality: "Neurologist",
      date: "2024-03-15",
      time: "2:00 PM",
      location: "Health Plaza, Wing B",
      status: "completed",
    },
    // Add more appointments as needed
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    const matchesFilter = filter === 'all' || appointment.status === filter;
    const matchesSearch = appointment.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         appointment.speciality.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
        <p className="mt-2 text-gray-600">Manage and track your medical appointments</p>
      </div>

      {/* Filters and Search */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded-lg ${filter === 'upcoming' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg ${filter === 'completed' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Completed
          </button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by doctor or speciality"
            className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {filteredAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={appointment.doctorImage}
                    alt={appointment.doctorName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{appointment.doctorName}</h3>
                  <p className="text-gray-600">{appointment.speciality}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-gray-400" />
                  <span className="text-gray-600">{appointment.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-gray-400" />
                  <span className="text-gray-600">{appointment.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-gray-400" />
                  <span className="text-gray-600">{appointment.location}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="mt-4 flex gap-2 justify-end">
              {appointment.status === 'upcoming' && (
                <>
                  <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg">
                    Cancel
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg">
                    Reschedule
                  </button>
                </>
              )}
              {appointment.status === 'completed' && (
                <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg">
                  View Details
                </button>
              )}
            </div>
          </div>
        ))}

        {filteredAppointments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No appointments found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAppointment;