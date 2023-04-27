import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import humburger from "../../Images/humberger-Menu.png"
import logoblack from "../../Images/Logo.png"
import callIcon from "../../Images/call-icon.png"
import mailIcon from "../../Images/mail-icon.png"
import map from "../../Images/map-icon.png"
import {FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram,} from "react-icons/fa";
import { Link } from 'react-router-dom';

const SlideCanvas = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Button onClick={handleShow} className="hum-btn">
          <img src={humburger} alt="humburger" />
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <div className="canva-logo">
              <img src={logoblack} alt="logoblack" />
            </div>
            <div class="socail-icon siderbar-contact">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <img src={callIcon} alt='callIcon' />
                  <span>
                    <Link to="tel:+44 123 456 7890">+44 123 456 7890</Link>
                    <Link to="tel:+44 987 654 1230">+44 987 654 1230</Link>
                  </span>
                </li>
                <li>
                  <img src={mailIcon} alt='mailIcon' />
                  <span>
                    <Link to="tel:trooyoga@email.com">trooyoga@email.com </Link>
                    <Link to="tel:info@trootheme.com"> info@trootheme.com</Link>
                  </span>
                </li>
                <li>
                  <img src={map} alt='map' />
                  <span>8 Clarence Court,Geraldton, 2506, Australia</span>
                </li>
              </ul>
            </div>
            <div class="socail-icon">
              <h4>Social Network</h4>
              <ul>
                <li><Link to="#"><FaFacebookF /></Link></li>
                <li><Link to="#"><FaTwitter /></Link></li>
                <li><Link to="#"><FaInstagram /></Link></li>
                <li><Link to="#"><FaLinkedinIn /></Link></li>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
    </div>
  )
}

export default SlideCanvas