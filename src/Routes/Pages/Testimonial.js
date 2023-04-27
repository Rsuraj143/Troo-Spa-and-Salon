import React from "react";
import Header from "../../Components/Header/Header";
import HeroGlobal from "../../Components/HeroComponent/HeroGlobal";
import Footer from "../../Components/Footer/Footer";
import ReViewComponent2 from "../../Components/ReviewComponent/ReViewComponent2";
import WorkComponent from "../../Components/WorkComponent/WorkComponent";
import WorkListComponent from "../../Components/WorkComponent/WorkListComponent";
import GalleryComponent from "../../Components/GallerryComponent/GalleryComponent";

const Testimonial = () => {
  return (
    <div class="testimonial">
      <Header />
      <HeroGlobal />
      <ReViewComponent2 />
      <WorkComponent />
      <WorkListComponent />
      <GalleryComponent />
      <Footer />
    </div>
  );
};

export default Testimonial;
