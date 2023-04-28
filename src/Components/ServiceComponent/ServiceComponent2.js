import React from "react";
import "./ServiceComponent.css";
import { ServiceData } from "./ServiceData";
import { Link, createSearchParams } from "react-router-dom";

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
          {ServiceData.slice(0, 3).map((e, i) => (
            <div class="col-md-4" key={i}>
              <Link
                to={`/Home/Our_Services/Service_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div class="services-col">
                  <div class="services-text">
                    <h4>{e.Name}</h4>
                    <p>{e.para}</p>
                    <img src={e.arrow} alt="arroewIcon" />
                  </div>
                  <div class="services-img">
                    <img src={e.img} alt="service1" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div class="row">
          {ServiceData.slice(3, 6).map((e, i) => (
            <div class="col-md-4" key={i}>
              <Link
                to={`/Home/Our_Services/Service_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div class="services-col">
                  <div class="services-text">
                    <h4>{e.Name}</h4>
                    <p>{e.para}</p>
                    <img src={e.arrow} alt="arroewIcon" />
                  </div>
                  <div class="services-img">
                    <img src={e.img} alt="service1" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div class="row">
          {ServiceData.slice(6, 9).map((e, i) => (
            <div class="col-md-4" key={i}>
              <Link
                to={`/Home/Our_Services/Service_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div class="services-col">
                  <div class="services-text">
                    <h4>{e.Name}</h4>
                    <p>{e.para}</p>
                    <img src={e.arrow} alt="arroewIcon" />
                  </div>
                  <div class="services-img">
                    <img src={e.img} alt="service1" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent2;
