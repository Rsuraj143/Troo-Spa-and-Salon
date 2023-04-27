import React from 'react'
import "./ServiceComponent.css"
import arroewIcon from "../../Images/arrow-Icon.png"
import service1 from "../../Images/services-1.png"
import service2 from "../../Images/services-2.png"
import service3 from "../../Images/services-3.png"
import service4 from "../../Images/services-4.png"
import service5 from "../../Images/services-5.png"
import service6 from "../../Images/services-6.png"
import service7 from "../../Images/services-7.png"
import service8 from "../../Images/services-8.png"
import service9 from "../../Images/services-9.png"

const ServiceComponent2 = () => {
  return (
    <section class="troo-da-services-section" id="troo-da-services-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="troo-tile">
            <span>What we serve</span>
            <h2>A wide selection of spa and salon services</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="services-col">
            <div class="services-text">
              <h4>Massage Therapy</h4>
              <p>It is a long established fact that a reader and we arewill be distracted.</p>
              <img src={arroewIcon} alt='arroewIcon' />
            </div>
            <div class="services-img">
              <img src={service1} alt='service1' />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="services-col">
            <div class="services-text">
              <h4>Body Treatments</h4>
              <p>It is a long established fact that a reader and we arewill be distracted.</p>
              <img src={arroewIcon} alt='arroewIcon' />
            </div>
            <div class="services-img">
              <img src={service2} alt='service2' />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="services-col">
            <div class="services-text">
              <h4>Aroma Therapy</h4>
              <p>It is a long established fact that a reader and we arewill be distracted.</p>
              <img src={arroewIcon} alt='arroewIcon' />
            </div>
            <div class="services-img">
              <img src={service3} alt='service3' />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="services-col">
            <div class="services-text">
              <h4>Natural Relaxation</h4>
              <p>It is a long established fact that a reader and we arewill be distracted.</p>
              <img src={arroewIcon} alt='arroewIcon' />
            </div>
            <div class="services-img">
              <img src={service4} alt='service4' />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="services-col">
            <div class="services-text">
              <h4>Trendy Hair Style</h4>
              <p>It is a long established fact that a reader and we arewill be distracted.</p>
              <img src={arroewIcon} alt='arroewIcon' />
            </div>
            <div class="services-img">
              <img src={service5} alt='service5' />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="services-col">
            <div class="services-text">
              <h4>Facial Therapy</h4>
              <p>It is a long established fact that a reader and we arewill be distracted.</p>
              <img src={arroewIcon} alt='arroewIcon' />
            </div>
            <div class="services-img">
              <img src={service6} alt='service6' />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="services-col">
            <div class="services-text">
              <h4>Stone Therapy</h4>
              <p>It is a long established fact that a reader and we arewill be distracted.</p>
              <img src={arroewIcon} alt='arroewIcon' />
            </div>
            <div class="services-img">
              <img src={service7} alt='service7' />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="services-col">
            <div class="services-text">
              <h4>Hair Color</h4>
              <p>It is a long established fact that a reader and we arewill be distracted.</p>
              <img src={arroewIcon} alt='arroewIcon' />
            </div>
            <div class="services-img">
              <img src={service8} alt='service8' />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="services-col">
            <div class="services-text">
              <h4>Pedicure - Manicure</h4>
              <p>It is a long established fact that a reader and we arewill be distracted.</p>
              <img src={arroewIcon} alt='arroewIcon' />
            </div>
            <div class="services-img">
              <img src={service9} alt='service9' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ServiceComponent2