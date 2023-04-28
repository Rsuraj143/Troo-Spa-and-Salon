import React, { useEffect } from "react";
import "./Header.css";
import Logo from "../../Images/Logo.png";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { HeaderData } from "./HeaderData";
import NavMenu from "./NavMenu";
import facebook from "../../Images/Facebook.png";
import tweeter from "../../Images/Twitter.png";
import instagram from "../../Images/Instagram.png";
import SlideCanvas from "./SlideCanvas";

const Header = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className="header">
      <section class="troo-da-header-section" id="troo-da-header-section">
        <Navbar expand="lg" bg="light">
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
                  <Link to="#">
                    <img src={facebook} alt="facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src={tweeter} alt="tweeter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
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
        <SlideCanvas />
      </section>
    </div>
  );
};

export default Header;
