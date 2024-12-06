import React from 'react'
import doc1 from '../assets/doc1.png'
import doc2 from '../assets/doc2.png'
import doc3 from '../assets/doc3.png'
import { 
  MedicalServicesOutlined, 
  LocalHospitalOutlined, 
  PeopleOutlineOutlined, 
  VerifiedUserOutlined 
} from '@mui/icons-material'

const About = () => {


  const teamMembers = [
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Chief Medical Officer',
      image: doc2,
      bio: 'Leading our medical team with 15 years of hospital management experience.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Technology',
      image: doc1,
      bio: 'Innovative tech leader transforming healthcare through digital solutions.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Patient Care Director',
      image: doc3,
      bio: 'Dedicated to enhancing patient experience and care quality.',
    },
  ];
  

  const features = [
    {
      icon: <MedicalServicesOutlined className="text-4xl text-blue-500" />,
      title: 'Comprehensive Care',
      description: 'Offering a wide range of medical services across multiple specialties.'
    },
    {
      icon: <LocalHospitalOutlined className="text-4xl text-green-500" />,
      title: 'Advanced Technology',
      description: 'Utilizing cutting-edge medical technologies for accurate diagnostics.'
    },
    {
      icon: <PeopleOutlineOutlined className="text-4xl text-purple-500" />,
      title: 'Patient-Centered Approach',
      description: 'Delivering personalized care that puts patient needs first.'
    },
    {
      icon: <VerifiedUserOutlined className="text-4xl text-red-500" />,
      title: 'Trusted Professionals',
      description: 'A team of highly qualified and experienced medical experts.'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
              Caring for You, Always
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-blue-100">
              Our mission is to provide compassionate, high-quality healthcare 
              that transforms lives and communities.
            </p>
          </div>
        </div>
      </div>

      {/* Our Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Our Commitment
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Delivering Excellence in Healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="
                  bg-white border border-gray-100 rounded-xl shadow-lg 
                  p-6 text-center transform transition duration-300 
                  hover:scale-105 hover:shadow-xl
                "
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Leadership Team
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Dedicated professionals committed to your health and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="
                  bg-white rounded-xl shadow-lg overflow-hidden 
                  transform transition duration-300 hover:scale-105
                "
              >
                <div className="relative">
                  <img 
                    className="w-full h-64 object-cover" 
                    src={member.image} 
                    alt={member.name} 
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Take the Next Step?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Schedule a consultation or learn more about our services
          </p>
          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="
                bg-white text-blue-600 px-8 py-3 rounded-full 
                font-semibold hover:bg-blue-50 transition duration-300
                transform hover:scale-105 shadow-lg
              "
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About