import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Appointment from './pages/Appointment';
import Context from './pages/Contact';
import Login from './pages/Login';
import MyAppointment from './pages/MyAppoinment';
import MyProfile from './pages/MyProfile';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/doctors' element = {<Doctors/>}/>
        <Route path='/doctors/:speciality' element = {<Doctors/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/appointment/:docId' element = {<Appointment/>}/>
        <Route path='/contact' element = {<Context/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/my-appointment' element = {<MyAppointment/>}/>
        <Route path='/my-profile' element = {<MyProfile/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
