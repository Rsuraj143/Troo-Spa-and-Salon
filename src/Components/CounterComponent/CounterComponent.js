import React, { useState } from "react";
import "./CounterComponent.css";
import counter1 from "../../Images/counter-1.png";
import counter2 from "../../Images/counter-2.png";
import counter3 from "../../Images/counter-3.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterComponent = () => {
  const [counter, setCounter] = useState(false);
  return (
    <div className="counder-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="counter-box">
              <div className="conter-icon">
                <img src={counter1} alt="counter1" />
              </div>
              <div className="conter-tx">
                <ScrollTrigger
                  onEnter={() => setCounter(true)}
                  onExit={() => setCounter(false)}
                  className="counter"
                >
                  {counter && (
                    <CountUp
                      start={0}
                      end={30}
                      duration={3}
                      delay={0}
                    />
                  )}
                 <strong>+</strong>
                </ScrollTrigger>
                <h4>Year experience</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="counter-box">
              <div className="conter-icon">
                <img src={counter2} alt="counter2" />
              </div>
              <div className="conter-tx">
              <ScrollTrigger
                  onEnter={() => setCounter(true)}
                  onExit={() => setCounter(false)}
                  className="counter"
                >
                  {counter && (
                    <CountUp
                      start={50}
                      end={100}
                      duration={3}
                      delay={0}
                     
                    />
                  )}
                  <strong>+</strong>
                </ScrollTrigger>
                <h4>Clients setisfection</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="counter-box">
              <div className="conter-icon">
                <img src={counter3} alt="counter3" />
              </div>
              <div className="conter-tx">
              <ScrollTrigger
                  onEnter={() => setCounter(true)}
                  onExit={() => setCounter(false)}
                  className="counter"
                >
                  {counter && (
                    <CountUp
                      start={0}
                      end={12}
                      duration={3}
                      delay={0}
                    />
                  )}
                 <strong>+</strong>
                </ScrollTrigger>
                <h4>Spa in your city</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
