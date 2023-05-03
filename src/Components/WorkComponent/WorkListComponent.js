import React from 'react'
import flower from "../../Images/flower.png"
import arrow from "../../Images/arrow.svg"
import leg from "../../Images/woman-leg.png"
import women from "../../Images/woman.png"

const WorkListComponent = () => {
  return (
    <section className="how-work-list">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="how-cc">
            <div className="how-ss">
              <div className="how-img">
                <img src={flower} alt='flower' />
                <span>01</span>
              </div>
              <div className="how-list-text">
                <h4>Meeting</h4>
                <p>It is a long established fact that it is also reader we.</p>
              </div>
            </div>
            <div className="arrow-col">
              <img src={arrow} alt='arrow' />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="how-cc">
            <div className="how-ss">
              <div className="how-img">
                <img src={leg} alt='leg' />
                <span>02</span>
              </div>
              <div className="how-list-text">
                <h4>Treatment</h4>
                <p>It is a long established fact that it is also reader we.</p>
              </div>
            </div>
            <div className="arrow-col">
              <img src={arrow} alt='arrow' />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="how-cc">
            <div className="how-ss">
              <div className="how-img">
                <img src={women} alt='women' />
                <span>03</span>
              </div>
              <div className="how-list-text">
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