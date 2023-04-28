import React from "react";
import "./HeroComponent.css";
import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <section class="troo-da-hero-section" id="troo-da-hero-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="banner-text">
              <div class="sub-title">We are your truly beauty specialist</div>
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
            <div class="troo-btn">
              <div class="make-btn">
                <Link to="/Home/Make_An_Appointment" class="btn btn-lg">
                  <span>Make An Appointment</span>
                </Link>
              </div>
              <div class="view-services">
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
