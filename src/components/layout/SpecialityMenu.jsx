import React, { useState } from 'react'
import { specialityData } from '../../assets/assets'
import { PlusCircle } from 'lucide-react'

const SpecialityMenu = () => {
  const [activeSpeciality, setActiveSpeciality] = useState(null)

  return (
    <div id='speciality' className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Medical Specialities
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of medical specialties, 
          designed to provide personalized and advanced healthcare solutions.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {specialityData.map((specialty, index) => (
          <div 
            key={index} 
            onClick={() => setActiveSpeciality(specialty)}
            className={`bg-white rounded-xl shadow-lg hover:shadow-xl 
                       transition-all duration-300 p-6 text-center 
                       group hover:scale-105 hover:border-indigo-500 
                       border ${activeSpeciality === specialty 
                         ? 'border-indigo-500' 
                         : 'border-transparent'}`}
          >
            <div className="mb-4 flex justify-center">
              <img 
                src={specialty.image} 
                alt={specialty.speciality}
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {specialty.speciality}
            </h3>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                className="text-indigo-600 hover:text-indigo-800 
                           flex items-center mx-auto"
              >
                <PlusCircle className="mr-2" size={20} />
                Learn More
              </button>
            </div>
          </div>
        ))}
        
        <div 
          className="bg-indigo-50 rounded-xl flex items-center 
                     justify-center text-center p-6 hover:bg-indigo-100 
                     transition-colors duration-300 cursor-pointer 
                     group col-span-2 md:col-span-3 lg:col-span-1"
        >
          <div>
            <PlusCircle 
              className="mx-auto mb-4 text-indigo-600 
                         group-hover:rotate-90 transition-transform"
              size={48} 
            />
            <h3 className="text-xl font-semibold text-gray-800">
              More Specialities
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Explore our full range of medical services
            </p>
          </div>
        </div>
      </div>


      {/* Detailed View Modal */}
      {activeSpeciality && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setActiveSpeciality(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <PlusCircle className="rotate-45" size={24} />
            </button>
            
            <div className="flex flex-col items-center">
              <img 
                src={activeSpeciality.image} 
                alt={activeSpeciality.speciality}
                className="w-32 h-32 object-contain mb-6"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {activeSpeciality.speciality}
              </h2>
              <p className="text-gray-600 text-center">
                Comprehensive care for {activeSpeciality.speciality.toLowerCase()} 
                related health concerns. Our expert doctors provide personalized 
                and advanced medical solutions.
              </p>
              <button 
                className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full 
                           hover:bg-indigo-700 transition-colors"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SpecialityMenu