import React from "react";
import "./Header.css";
import Logo from "../../Images/Logo.png";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { HeaderData } from "./HeaderData";
import NavMenu from "./NavMenu";
import facebook from "../../Images/Facebook.png"
import tweeter from "../../Images/Twitter.png"
import instagram from "../../Images/Instagram.png"

const Header = () => {
  return (
    <div className="header">
      <section class="troo-da-header-section" id="troo-da-header-section">
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="index.html">
            <img src={Logo} alt="Logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" aria-current="page" href="index.html">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">
                  About Us
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="services.html">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="services-detail.html">
                      Services Detail
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other Pages
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="team.html">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="team-detail.html">
                      Team Detail
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="testimonial.html">
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="photo-gallery.html">
                      Photo Gallery
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="our-works.html">
                      Our Works
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="our-works-detail.html">
                      Our Works Detail
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="faq.html">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="pricing.html">
                      Pricing Tabel
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="coming-soon.html">
                      Coming Soon
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="error.html">
                      404
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Blogs
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="blogs.html">
                      Our Blogs
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="blogs-detail.html">
                      Blogs Detail
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
            </ul>

            <div class="socail-icons">
              <ul>
                <li>
                  <a href="#">
                    <img src="images/Facebook.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/Twitter.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/Instagram.png" />
                  </a>
                </li>
              </ul>
            </div>

            <div class="make-btn">
              <a href="make-an-appointment.html" class="btn btn-lg">
                <span>Make An Appointment</span>
              </a>
            </div>
          </div>
        </nav> */}
        <Navbar expand="lg" bg="light" >
          <Navbar.Brand>
            <Link to="/Home">
              <img src={Logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav ">
              {HeaderData.slice(0, 6).map((item, i) => {
                return <NavMenu key={i} item={item} />;
              })}
            </ul>
            <div class="socail-icons">
              <ul>
                <li>
                  <Link href="#">
                    <img src={facebook} alt="facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src={tweeter} alt="tweeter"/>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src={instagram} alt="instagram" />
                  </Link>
                </li>
              </ul>
            </div>

            <div class="make-btn">
              {HeaderData.slice(-1).map((e, i) => {
                return (
                  <Link class="btn btn-lg" key={i} to={e.path}>
                    <span>{e.title}</span>
                  </Link>
                );
              })}
            </div>
          </Navbar.Collapse>
        </Navbar>

        <button
          class="hum-btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <img src="images/humberger-Menu.png" />
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div class="canva-logo">
              <img src="images/Logo.png" />
            </div>
            <div class="socail-icon siderbar-contact">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <img src="images/call-icon.png" />
                  <span>
                    <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                    <a href="tel:+44 987 654 1230">+44 987 654 1230</a>
                  </span>
                </li>
                <li>
                  <img src="images/mail-icon.png" />
                  <span>
                    <a href="tel:trooyoga@email.com">trooyoga@email.com </a>
                    <a href="tel:info@trootheme.com"> info@trootheme.com</a>
                  </span>
                </li>
                <li>
                  <img src="images/map-icon.png" />
                  <span>8 Clarence Court,Geraldton, 2506, Australia</span>
                </li>
              </ul>
            </div>
            <div class="socail-icon">
              <h4>Social Network</h4>
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
