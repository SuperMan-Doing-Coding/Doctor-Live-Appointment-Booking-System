import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { 
  MedicalServicesOutlined, 
  PersonOutline, 
  WorkspacePremiumOutlined 
} from '@mui/icons-material'

const Doctors = () => {
  const { speciality } = useParams()
  const { doctors } = useContext(AppContext)
  const [filterDoc, setFilterDoc] = useState([])
  const [activeSpecialty, setActiveSpecialty] = useState(null)
  const navigate = useNavigate()

  const specialtyList = [
    { 
      name: 'General Physician', 
      icon: <MedicalServicesOutlined className="mr-2 text-blue-500" /> 
    },
    { 
      name: 'Gynecologist', 
      icon: <PersonOutline className="mr-2 text-pink-500" /> 
    },
    { 
      name: 'Dermatologist', 
      icon: <WorkspacePremiumOutlined className="mr-2 text-green-500" /> 
    },
    { 
      name: 'Pediatricians', 
      icon: <MedicalServicesOutlined className="mr-2 text-purple-500" /> 
    },
    { 
      name: 'Neurologist', 
      icon: <PersonOutline className="mr-2 text-red-500" /> 
    },
    { 
      name: 'Gastroenterologist', 
      icon: <WorkspacePremiumOutlined className="mr-2 text-yellow-500" /> 
    }
  ]

    const applyFilter = () => {
    if (speciality) {
      const filteredDoctors = doctors.filter(doc => 
        doc.speciality.toLowerCase() === speciality.toLowerCase()
      )
      setFilterDoc(filteredDoctors)
      setActiveSpecialty(speciality)
    } else {
      setFilterDoc(doctors)
      setActiveSpecialty(null)
    }
  }

  useEffect(() => {
    if (doctors && doctors.length > 0) {
      applyFilter()
    }
  }, [speciality, doctors])

  if (!doctors) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse text-2xl text-blue-500">
          Loading doctors...
        </div>
      </div>
    )
  }

  if (doctors.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        No doctors found.
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Find Your Specialist
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover expert doctors across various specialties
          </p>
        </div>
        
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Specialty Sidebar */}
          <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">
              Medical Specialties
            </h2>
            <div className="space-y-2">
              {specialtyList.map((spec) => (
                <button
                  key={spec.name}
                  onClick={() => {
                    navigate(`/doctors/${spec.name.toLowerCase()}`);
                    window.scrollTo(0, 0);
                  }}
                  className={`
                    w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                    flex items-center
                    ${activeSpecialty === spec.name.toLowerCase() 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'hover:bg-gray-100 text-gray-700'}
                  `}
                >
                  {spec.icon}
                  {spec.name}
                </button>
              ))}
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterDoc.map((doctor) => (
              <div
                key={doctor._id}
                onClick={() => {
                  navigate(`/appointment/${doctor._id}`);
                  window.scrollTo(0, 0);
                }}
                className="
                  bg-white rounded-xl shadow-lg overflow-hidden 
                  transform transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl 
                  cursor-pointer group
                "
              >
                <div className="relative">
                  {doctor.image ? (
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-70 h-56 object-cover group-hover:opacity-80 transition-opacity"
                    />
                  ) : (
                    <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
                      <PersonOutline className="text-6xl text-gray-400" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                    Available
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <WorkspacePremiumOutlined className="mr-2 text-blue-500" />
                    {doctor.speciality}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors