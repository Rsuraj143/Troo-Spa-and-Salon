import React from 'react'
import "./workCards.css"
import arrow from "../../Images/white-arrow.png"
import work1 from "../../Images/work-1.png"
import work2 from "../../Images/work-2.png"
import work3 from "../../Images/work-3.png"
import work4 from "../../Images/work-4.png"
import work5 from "../../Images/work-5.png"
import work6 from "../../Images/work-6.png"
import work7 from "../../Images/work-7.png"
import work8 from "../../Images/work-8.png"
import work9 from "../../Images/work-9.png"

const WorkComponent2 = () => {
  return (
    <section class="troo-da-our-work-section" id="troo-da-our-work-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="work-col">
            <img src={work1} alt='work1' />
            <div class="work-text">
              <p>Spa and Beauty</p>
              <h5>Full body massage</h5>
              <div class="arrow-im"><img src={arrow} alt='arrow' /></div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-col">
            <img src={work2} alt='work2' />
            <div class="work-text">
              <p>Spa and Beauty</p>
              <h5>Head Massage</h5>
              <div class="arrow-im"><img src={arrow} alt='arrow' /></div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-col">
            <img src={work3} alt='work3'  />
            <div class="work-text">
              <p>Wellness & Spa</p>
              <h5>Aroma therapy</h5>
              <div class="arrow-im"><img src={arrow} alt='arrow' /></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="work-col">
            <img src={work4} alt='work4' />
            <div class="work-text">
              <p>Spa and Beauty</p>
              <h5>Sauna relax</h5>
              <div class="arrow-im"><img src={arrow} alt='arrow' /></div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-col">
            <img src={work5} alt='work5' />
            <div class="work-text">
              <p>Spa and Beauty</p>
              <h5>Finnish sauna</h5>
              <div class="arrow-im"><img src={arrow} alt='arrow' /></div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-col">
            <img src={work6} alt='work6' />
            <div class="work-text">
              <p>Wellness & Spa</p>
              <h5>Facial Spa</h5>
              <div class="arrow-im"><img src={arrow} alt='arrow' /></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="work-col">
            <img src={work7} alt='work7' />
            <div class="work-text">
              <p>Spa and Beauty</p>
              <h5>A Place of True Splendor</h5>
              <div class="arrow-im"><img src={arrow} alt='arrow' /></div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-col">
            <img src={work8} alt='work8' />
            <div class="work-text">
              <p>Spa and Beauty</p>
              <h5>Face masks</h5>
              <div class="arrow-im"><img src={arrow} alt='arrow' /></div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="work-col">
            <img src={work9} alt='work9' />
            <div class="work-text">
              <p>Wellness & Spa</p>
              <h5>Geothermal spa</h5>
              <div class="arrow-im"><img src={arrow} alt='arrow' /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default WorkComponent2