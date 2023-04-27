import React from "react";
import Header from "../Components/Header/Header";
import HeroGlobal from "../Components/HeroComponent/HeroGlobal";
import Footer from "../Components/Footer/Footer";
import ContactComponent from "../Components/ContactComponent/ContactComponent";

const ContactUs = () => {
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
