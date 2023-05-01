import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HeroGlobal from "../../Components/HeroComponent/HeroGlobal";
import ServiceComponent2 from "../../Components/ServiceComponent/ServiceComponent2";
import CounterComponent from "../../Components/CounterComponent/CounterComponent";
import VideoComponent from "../../Components/VideoComponent/VideoComponent";
import ReviewComponent from "../../Components/ReviewComponent/ReviewComponent";
import TeamComponent from "../../Components/TeamComponent/TeamComponent";
import WorkComponent from "../../Components/WorkComponent/WorkComponent";
import WorkListComponent from "../../Components/WorkComponent/WorkListComponent";
import GalleryComponent from "../../Components/GallerryComponent/GalleryComponent";
import useDocumentTitle from "../../PageTitle";

const Services = () => {
  useDocumentTitle("TRoo Spa | Service ")
  return (
    <div class="services">
      <Header />
      <HeroGlobal />
      <ServiceComponent2 />
      <VideoComponent />
      <CounterComponent />
      <ReviewComponent />
      <TeamComponent />
      <WorkComponent />
      <WorkListComponent />
      <GalleryComponent />
      <Footer />
    </div>
  );
};

export default Services;
