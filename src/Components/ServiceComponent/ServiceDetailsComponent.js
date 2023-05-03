import React from "react";
import "./ServiceDetailsComponent.css";
import serviceDtls1 from "../../Images/services-deails.png"
import num from "../../Images/90.png"
import serviceDlts2 from "../../Images/services-deails-2.png"
import serviceDtls3 from "../../Images/services-deails-3.png"

const ServiceDetailsComponent = () => {
  return (
    <section className="troo-da-services-details-section" id="troo-da-services-details-section">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="services-detils-ss">
            <div className="ser-img">
              <img src={serviceDtls1} alt="serviceDtls" />
            </div>
            <div className="ser-text">
              <h4>Discription</h4>
              <p>Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the
                industry’s
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
                It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <p>Lorem Ipsum is simply dummy text of the printin and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
              <h4>Your title goes here</h4>
              <p>Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
          <div className="provied-ss">
            <div className="pro-icon">
              <img src={num} alt="num" />
            </div>
            <div className="pro-txt">
              <h5>We provide full body massage</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry simply dummy text of the printing and </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="ser-bttom-img">
                <img src={serviceDlts2} alt="serviceDlts2" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="ser-bttom-img">
                <img src={serviceDtls3} alt="serviceDtls3" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="title-goes">
                <h4> Your title goes here</h4>
                <p>Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the
                  industry’s standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                  has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="sidebar">
            <div className="therapy-detail">
              <h4>Therapy Detail</h4>
              <ul>
                <li><span>Therapist:</span><strong>Charlote Rose</strong></li>
                <li><span>Time: </span><strong>60 Min</strong></li>
                <li><span>Time: </span><strong>At Booked Time</strong></li>
                <li><span>Location: </span><strong>Any Our Spa Senter</strong></li>
              </ul>
            </div>
            <div className="therapy-detail more-services">
              <h4>More Services</h4>
              <ul>
                <li>Facials Therapy</li>
                <li>Body Treatments</li>
                <li>Finishing Touches</li>
                <li>Hands & Feet</li>
                <li>Aroma Therapy</li>
                <li>Medicure - Pedicure</li>
                <li>Hair Color</li>
                <li>Hair Cutting </li>
                <li>Stone Therapy</li>
                <li>Body Massage</li>
              </ul>
            </div>
            <div className="offer-section">
              <div className="off-text">
                <span>Spa and Salon</span>
                <strong>30%</strong>
                <p>Discount on
                  Massage and spa Therapy</p>
              </div>

            </div>
            <div className="book-ss">
              <h4>Book an Appointment</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ServiceDetailsComponent;
