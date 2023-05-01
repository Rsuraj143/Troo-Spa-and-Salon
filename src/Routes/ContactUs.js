import React from "react";
import Header from "../Components/Header/Header";
import HeroGlobal from "../Components/HeroComponent/HeroGlobal";
import Footer from "../Components/Footer/Footer";
import ContactComponent from "../Components/ContactComponent/ContactComponent";
import useDocumentTitle from "../PageTitle";

const ContactUs = () => {
  useDocumentTitle("TRoo Spa | Contact Us ")
  return (
    <div class="contact">
      <Header />
      <HeroGlobal />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default ContactUs;
