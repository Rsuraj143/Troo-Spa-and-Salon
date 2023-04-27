import React from 'react'
import "./CounterComponent.css"
import counter1 from "../../Images/counter-1.png"
import counter2 from "../../Images/counter-2.png"
import counter3 from "../../Images/counter-3.png"

const CounterComponent = () => {
  return (
    <div class="counder-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="counter-box">
            <div class="conter-icon"><img src={counter1} alt='counter1' /></div>
            <div class="conter-tx">
              <span class="counter">30</span>
              <strong>+</strong>
              <h4>Year experience</h4>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="counter-box">
            <div class="conter-icon"><img src={counter2} alt='counter2' /></div>
            <div class="conter-tx">
              <span class="counter">100</span>
              <strong>+</strong>
              <h4>Clients setisfection</h4>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="counter-box">
            <div class="conter-icon"><img src={counter3} alt='counter3' /></div>
            <div class="conter-tx">
              <span class="counter">12</span>
              <strong>+</strong>
              <h4>Spa in your city</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CounterComponent