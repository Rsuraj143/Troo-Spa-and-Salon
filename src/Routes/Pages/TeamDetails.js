import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import TeamDetailsComponent from '../../Components/TeamComponent/TeamDetailsComponent'
import ReviewComponent from '../../Components/ReviewComponent/ReviewComponent'
import useDocumentTitle from '../../PageTitle'

const TeamDetails = () => {
  useDocumentTitle("TRoo Spa | Team Details ")
  return (
    <div>
      <Header />
      <HeroGlobal/>
      <TeamDetailsComponent/>
      <ReviewComponent/>
      <Footer/>
    </div>
  )
}

export default TeamDetails
