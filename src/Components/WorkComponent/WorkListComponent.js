import React from 'react'
import flower from "../../Images/flower.png"
import arrow from "../../Images/arrow.svg"
import leg from "../../Images/woman-leg.png"
import women from "../../Images/woman.png"

const WorkListComponent = () => {
  return (
    <section class="how-work-list">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="how-cc">
            <div class="how-ss">
              <div class="how-img">
                <img src={flower} alt='flower' />
                <span>01</span>
              </div>
              <div class="how-list-text">
                <h4>Meeting</h4>
                <p>It is a long established fact that it is also reader we.</p>
              </div>
            </div>
            <div class="arrow-col">
              <img src={arrow} alt='arrow' />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="how-cc">
            <div class="how-ss">
              <div class="how-img">
                <img src={leg} alt='leg' />
                <span>02</span>
              </div>
              <div class="how-list-text">
                <h4>Treatment</h4>
                <p>It is a long established fact that it is also reader we.</p>
              </div>
            </div>
            <div class="arrow-col">
              <img src={arrow} alt='arrow' />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="how-cc">
            <div class="how-ss">
              <div class="how-img">
                <img src={women} alt='women' />
                <span>03</span>
              </div>
              <div class="how-list-text">
                <h4>Enjoy and Repeat</h4>
                <p>It is a long established fact that it is also reader we.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WorkListComponent