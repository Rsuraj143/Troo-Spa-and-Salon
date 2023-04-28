import React from "react";
import "./workCards.css";
import { WorkData } from "./WorkData";

const WorkComponent2 = () => {
  return (
    <section class="troo-da-our-work-section" id="troo-da-our-work-section">
      <div class="container">
        <div class="row">
          {WorkData.slice(0, 3).map((e, i) => (
            <div class="col-md-4" key={i}>
              <div class="work-col">
                <img src={e.img} alt="work1" />
                <div class="work-text">
                  <p>{e.title} </p>
                  <h5>{e.name} </h5>
                  <div class="arrow-im">
                    <img src={e.arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="row">
          {WorkData.slice(3, 6).map((e, i) => (
            <div class="col-md-4" key={i}>
              <div class="work-col">
                <img src={e.img} alt="work1" />
                <div class="work-text">
                  <p>{e.title} </p>
                  <h5>{e.name} </h5>
                  <div class="arrow-im">
                    <img src={e.arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="row">
          {WorkData.slice(6, 9).map((e, i) => (
            <div class="col-md-4" key={i}>
              <div class="work-col">
                <img src={e.img} alt="work1" />
                <div class="work-text">
                  <p>{e.title} </p>
                  <h5>{e.name} </h5>
                  <div class="arrow-im">
                    <img src={e.arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkComponent2;
