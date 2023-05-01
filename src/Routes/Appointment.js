import React from 'react'
import Header from '../Components/Header/Header'
import HeroGlobal from '../Components/HeroComponent/HeroGlobal'
import Footer from '../Components/Footer/Footer'
import AppointementForm from '../Components/ContactComponent/AppointementForm'
import useDocumentTitle from '../PageTitle'

const Appointment = () => {
  useDocumentTitle("TRoo Spa | Appointment ")
  return (
    <div class="make-an-appointment">
      <Header/>
      <HeroGlobal/>
      <AppointementForm/>
      <Footer/>
    </div>
  )
}

export default Appointment