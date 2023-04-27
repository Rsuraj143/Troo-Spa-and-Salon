import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import FAQComponent from '../../Components/FAQComponent/FAQComponent'
import VideoComponent from '../../Components/VideoComponent/VideoComponent'
import CounterComponent from '../../Components/CounterComponent/CounterComponent'
import ReviewComponent from '../../Components/ReviewComponent/ReviewComponent'
import TeamComponent from '../../Components/TeamComponent/TeamComponent'

const FAQs = () => {
  return (
    <div>
      <Header/>
      <HeroGlobal/>
      <FAQComponent/>
      <VideoComponent/>
        <CounterComponent/>
        <ReviewComponent/>
        <TeamComponent/>
      <Footer/>
    </div>
  )
}

export default FAQs