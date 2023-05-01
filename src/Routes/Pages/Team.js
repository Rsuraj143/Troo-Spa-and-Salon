import React from "react";
import Header from "../../Components/Header/Header";
import HeroGlobal from "../../Components/HeroComponent/HeroGlobal";
import Footer from "../../Components/Footer/Footer";
import TeamComponent2 from "../../Components/TeamComponent/TeamComponent2";
import WorkComponent from "../../Components/WorkComponent/WorkComponent";
import WorkListComponent from "../../Components/WorkComponent/WorkListComponent";
import GalleryComponent from "../../Components/GallerryComponent/GalleryComponent";
import useDocumentTitle from "../../PageTitle";

const Team = () => {
  useDocumentTitle("TRoo Spa | Team's ")
  return (
    <div class="team">
      <Header />
      <HeroGlobal />
      <TeamComponent2 />
      <WorkComponent />
      <WorkListComponent />
      <GalleryComponent />
      <Footer />
    </div>
  );
};

export default Team;
