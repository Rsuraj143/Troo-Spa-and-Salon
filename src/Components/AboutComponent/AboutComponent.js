import React from 'react'
import "./AboutComponent.css"
import check from "../../Images/check.png"
import { Link } from 'react-router-dom'
import womenSkin from "../../Images/woman-skin.png"
import messangeChart from "../../Images/message-chat-circle.png"
import willness from "../../Images/wellness-center.png"

const AboutComponent = () => {
  return (
    <section className="troo-da-welcome-section" id="troo-da-welcome-section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="welcome-text">
            <div className="troo-tile">
              <span>Learn about who we are</span>
              <h2>Welcome toan incredible spa and salon experience</h2>
            </div>
            <h4>It is a long established fact that a reader will be distracted by the readable content.</h4>
            <p>It is a long established fact that a reader we arewill be distracted by the readable content of a page
              when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
              using 'Content here.</p>
            <ul>
              <li><img src={check} alt='check' />Every lorem ipsum dollr sit amet just dummy.</li>
              <li><img src={check} alt='check' />Using powerful lorem ipsum dollr sit amet just dummy.</li>
              <li><img src={check} alt='check' />Lorem ipsum dollr sit amet just dummy.</li>
            </ul>
            <div className="make-btn"> <Link to="/Home/Contact_Us" className="btn btn-lg"> <span>Contact With US</span></Link></div>
          </div>
        </div>
        <div className="col-md-6 womenSkin">
          <div className="welcome-img">
            <img src={womenSkin} alt='womenSkin' />
          </div>
          <div className="welcome-call">
            <div className="icon-cll">
              <img src={messangeChart} alt='messangeChart' />
            </div>
            <div className="wel-cll-text">
              <p>Let’s talk with us</p>
              <h3>+44 123 456 7890</h3>
              <h3>info@dcthemes.com</h3>
            </div>
            <div className="we-ico">
              <img src={willness} alt='willness' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutComponent