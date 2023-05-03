import React from "react";
import "./HeroComponent.css";
import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <section className="troo-da-hero-section" id="troo-da-hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-text">
              <div className="sub-title">We are your truly beauty specialist</div>
              <h1>
                Redefined the beauty with luxury <span>spa and salon</span>{" "}
                treatments
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a <br />
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal
                <br /> distribution of letters, as opposed to using 'Content
                here.
              </p>
            </div>
            <div className="troo-btn">
              <div className="make-btn">
                <Link to="/Home/Make_An_Appointment" className="btn btn-lg">
                  <span>Make An Appointment</span>
                </Link>
              </div>
              <div className="view-services">
                <Link to="/Home/Our_Services" class="btn">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
