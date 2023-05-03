import React from 'react'
import "./Footer.css"
import footer from "../../Images/footer-logo.png"
import facebook from "../../Images/Facebook.png"
import tweeter from "../../Images/Twitter.png"
import instagram from "../../Images/Instagram.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
       <section className="troo-da-footer-section" id="troo-da-footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="logo-ss">
              <div className="row">
                <div className="col-md-4">
                  <div className="logo-section">
                    <Link href="#"><img src={footer} alt='footer' /></Link>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="footer-link">
                    <ul>
                      <li><Link to="/Home">Home</Link></li>
                      <li><Link to="/Home/About_Us">About Us</Link></li>
                      <li><Link to="/Home/Our_Services">Our Services</Link></li>
                      <li><Link to="/Home/Blogs">Our Blogs</Link></li>
                      <li><Link to="/Home/Contact_Us">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="footer-text">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard.</p>
              <div className="socail-icons">
                <ul>
                  <li><Link to="#"><img src={facebook} alt='facebook' /></Link></li>
                  <li><Link to="#"><img src={tweeter} alt='tweeter' /></Link></li>
                  <li><Link to="#"><img src={instagram} alt='instagram' /></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3">
                <div className="bottom-footer-lilnks">
                  <h6>Contact us</h6>
                  <span>Contact us</span>
                  <Link to="#">+44 123 456 7890 </Link>
                  <Link to="#">support@email.com </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bottom-footer-lilnks location-col">
                  <h6>Location</h6>
                  <span>Address</span>
                  <p>North Ewingar Road Lionsville,
                    New South Wales, 2460 Aus</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bottom-footer-lilnks time-call">
                  <h6>Timing</h6>
                  <span>Opening Hour</span>
                  <p>Mon – Fri: 09am – 08pm ​​
                    Sat - Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="botm-text">
              <p>Copyright © 2022. <strong>troothemes.</strong> All rights reserved.</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="botm-text">
              <ul>
                <li><Link to="#">Terms & Conditions</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Footer