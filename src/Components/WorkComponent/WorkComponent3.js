import React from 'react'
import arrow from "../../Images/white-arrow.png"
import work1 from "../../Images/work-1.png"
import work2 from "../../Images/work-2.png"
import work3 from "../../Images/work-3.png"

const WorkComponent3 = () => {
  return (
    <section class="troo-da-our-work-section" id="troo-da-our-work-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="worl-ti">
            <h2>Related Works</h2>
          </div>
        </div>
      </div>
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
    </div>
  </section>
  )
}

export default WorkComponent3