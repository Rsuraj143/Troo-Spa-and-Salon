import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import TeamDetailsComponent from '../../Components/TeamComponent/TeamDetailsComponent'
import ReviewComponent from '../../Components/ReviewComponent/ReviewComponent'

const TeamDetails = () => {
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
