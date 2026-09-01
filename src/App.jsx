import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Problem from './components/Problem/Problem'
import ClinicOS from './components/ClinicOS/ClinicOS'
import Templates from './components/Templates/Templates'
import WebsiteFeatures from './components/WebsiteFeatures/WebsiteFeatures'
import BookingWhatsApp from './components/BookingWhatsApp/BookingWhatsApp'
import LaunchProcess from './components/LaunchProcess/LaunchProcess'
import PatientJourney from './components/PatientJourney/PatientJourney'
import AIReceptionist from './components/AIReceptionist/AIReceptionist'
import Pricing from './components/Pricing/Pricing'
import WhySnappyTales from './components/WhySnappyTales/WhySnappyTales'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Problem/>
    <ClinicOS/>
    <Templates/>
    <WebsiteFeatures/>
    <LaunchProcess/>
    <BookingWhatsApp/>
    {/* <PatientJourney/> */}
    <AIReceptionist/>
    <Pricing/>
    <WhySnappyTales/>
    <Footer/>
    
    </>
  )
}

export default App