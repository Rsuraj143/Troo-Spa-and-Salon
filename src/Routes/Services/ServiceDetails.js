import React from "react";
import Header from "../../Components/Header/Header";
import HeroGlobal from "../../Components/HeroComponent/HeroGlobal";
import Footer from "../../Components/Footer/Footer";
import ServiceDetailsComponent from "../../Components/ServiceComponent/ServiceDetailsComponent";
import TeamComponent from "../../Components/TeamComponent/TeamComponent";
import WorkComponent from "../../Components/WorkComponent/WorkComponent";
import WorkListComponent from "../../Components/WorkComponent/WorkListComponent";
import GalleryComponent from "../../Components/GallerryComponent/GalleryComponent";
import useDocumentTitle from "../../PageTitle";

const ServiceDetails = () => {
  useDocumentTitle("TRoo Spa | Service Details ")
  return (
    <div class="services-detail detail-pages">
      <Header />
      <HeroGlobal />
      <ServiceDetailsComponent />
      <TeamComponent />
      <WorkComponent />
      <WorkListComponent />
      <GalleryComponent />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
