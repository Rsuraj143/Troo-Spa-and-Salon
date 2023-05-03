import React from "react";
import "./ServiceComponent.css";
import { ServiceData } from "./ServiceData";
import { Link, createSearchParams } from "react-router-dom";

const ServiceComponent2 = () => {
  return (
    <section className="troo-da-services-section" id="troo-da-services-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="troo-tile">
              <span>What we serve</span>
              <h2>A wide selection of spa and salon services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {ServiceData.slice(0, 3).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link
                to={`/Home/Our_Services/Service_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div className="services-col">
                  <div className="services-text">
                    <h4>{e.Name}</h4>
                    <p>{e.para}</p>
                    <img src={e.arrow} alt="arroewIcon" />
                  </div>
                  <div className="services-img">
                    <img src={e.img} alt="service1" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          {ServiceData.slice(3, 6).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link
                to={`/Home/Our_Services/Service_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div className="services-col">
                  <div className="services-text">
                    <h4>{e.Name}</h4>
                    <p>{e.para}</p>
                    <img src={e.arrow} alt="arroewIcon" />
                  </div>
                  <div className="services-img">
                    <img src={e.img} alt="service1" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="row">
          {ServiceData.slice(6, 9).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link
                to={`/Home/Our_Services/Service_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div className="services-col">
                  <div className="services-text">
                    <h4>{e.Name}</h4>
                    <p>{e.para}</p>
                    <img src={e.arrow} alt="arroewIcon" />
                  </div>
                  <div className="services-img">
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
