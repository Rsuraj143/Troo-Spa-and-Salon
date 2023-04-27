import React from "react";
import Header from "../../Components/Header/Header";
import HeroGlobal from "../../Components/HeroComponent/HeroGlobal";
import Footer from "../../Components/Footer/Footer";
import PricingComponent from "../../Components/PricingComponent/PricingComponent";
import WorkComponent from "../../Components/WorkComponent/WorkComponent";
import WorkListComponent from "../../Components/WorkComponent/WorkListComponent";
import GalleryComponent from "../../Components/GallerryComponent/GalleryComponent";

const Pricingtable = () => {
  return (
    <div class="pricing">
      <Header />
      <HeroGlobal />
      <PricingComponent />
      <WorkComponent />
      <WorkListComponent />
      <GalleryComponent />
      <Footer />
    </div>
  );
};

export default Pricingtable;
