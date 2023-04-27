import React from 'react'
import workDtlsImg from "../../Images/services-deails.png"
import check from "../../Images/90.png"
import workDtls1 from "../../Images/services-deails-2.png"
import workDtls2 from "../../Images/services-deails-3.png"

const WorkDetailsComponent = () => {
  return (
    <section class="troo-da-services-details-section" id="troo-da-services-details-section">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="services-detils-ss">
            <div class="ser-img">
              <img src={workDtlsImg} alt='workDtlsImg' />
            </div>
            <div class="ser-text">
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
          <div class="provied-ss">
            <div class="pro-icon">
              <img src={check} alt='check' />
            </div>
            <div class="pro-txt">
              <h5>We provide full body massage</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry simply dummy text of the printing and </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="ser-bttom-img">
                <img src={workDtls1} alt='workDtls1' />
              </div>
            </div>
            <div class="col-md-6">
              <div class="ser-bttom-img">
                <img src={workDtls2} alt='workDtls2' />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="title-goes">
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
        <div class="col-md-4">
          <div class="sidebar">
            <div class="therapy-detail">
              <h4>Work Detail</h4>
              <ul>
                <li><span>Date:</span><strong>22 Dec, 2022</strong></li>
                <li><span>Client Name: </span><strong> John Johnson</strong></li>
                <li><span>Project type:</span><strong>Spa and Therapy</strong></li>
              </ul>
            </div>

            <div class="offer-section">
              <div class="off-text">
                <span>Spa and Salon</span>
                <strong>30%</strong>
                <p>Discount on
                  Massage and spa Therapy</p>
              </div>

            </div>
            <div class="book-ss">
              <h4>Book an Appointment</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WorkDetailsComponent