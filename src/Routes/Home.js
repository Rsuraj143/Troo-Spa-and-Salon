import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import HeroComponent from '../Components/HeroComponent/HeroComponent'
import AboutComponent from '../Components/AboutComponent/AboutComponent'
import ServiceComponent from '../Components/ServiceComponent/ServiceComponent'
import VideoComponent from '../Components/VideoComponent/VideoComponent'
import CounterComponent from '../Components/CounterComponent/CounterComponent'
import ReviewComponent from '../Components/ReviewComponent/ReviewComponent'
import TeamComponent from '../Components/TeamComponent/TeamComponent'
import HighlightComponent from '../Components/HighlightComponent/HighlightComponent'
import PricingComponent from '../Components/PricingComponent/PricingComponent'
import FAQComponent from '../Components/FAQComponent/FAQComponent'
import WorkComponent from '../Components/WorkComponent/WorkComponent'
import WorkListComponent from '../Components/WorkComponent/WorkListComponent'
import GalleryComponent from '../Components/GallerryComponent/GalleryComponent'
import BlogComponent from '../Components/BlogComponent/BlogComponent'
import useDocumentTitle from '../PageTitle'


const Home = () => {
 useDocumentTitle("TRoo Spa | Home ")
  return (
    <div>
        <Header/>
        <HeroComponent/>
        <AboutComponent/>
        <ServiceComponent/>
        <VideoComponent/>
        <CounterComponent/>
        <ReviewComponent/>
        <TeamComponent/>
        <HighlightComponent/>
        <PricingComponent/>
        <FAQComponent/>
        <WorkComponent/>
        <WorkListComponent/>
        <GalleryComponent/>
        <BlogComponent/>

        <Footer/>
    </div>
  )
}

export default Home