import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import HeroGlobal from '../Components/HeroComponent/HeroGlobal'
import AboutComponent from '../Components/AboutComponent/AboutComponent'
import VideoComponent from '../Components/VideoComponent/VideoComponent'
import CounterComponent from '../Components/CounterComponent/CounterComponent'
import ReviewComponent from '../Components/ReviewComponent/ReviewComponent'
import HighlightComponent from '../Components/HighlightComponent/HighlightComponent'
import TeamComponent from '../Components/TeamComponent/TeamComponent'
import GalleryComponent from '../Components/GallerryComponent/GalleryComponent'

const About = () => {
  return (
    <div class="about">
        <Header/>
        <HeroGlobal/>
        <AboutComponent/>
        <VideoComponent/>
        <CounterComponent/>
        <ReviewComponent/>
        <HighlightComponent/>
        <TeamComponent/>
        <GalleryComponent/>
        <Footer/>
    </div>
  )
}

export default About