import React from "react"
import Header from "../components/layout/Header"
import SpecialityMenu from "../components/layout/SpecialityMenu"
import TopDoctor from "../components/layout/TopDoctor"
import Banner from "../components/layout/Banner"
import Footer from "../components/layout/Footer"
const Home = () => {
  return (
    <div>
      Header
      <Header />
      Speciailty Menu
      <SpecialityMenu />
      Top Doctor
      <TopDoctor />
      Banner 
      <Banner />
    </div>
  )
}

export default Home
