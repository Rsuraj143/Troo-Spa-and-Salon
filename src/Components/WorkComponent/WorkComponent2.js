import React from "react";
import "./workCards.css";
import { WorkData } from "./WorkData";
import { Link, createSearchParams } from "react-router-dom";

const WorkComponent2 = () => {
  return (
    <section className="troo-da-our-work-section" id="troo-da-our-work-section">
      <div className="container">
        <div className="row">
          {WorkData.slice(0, 3).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link to={`/Home/Our_Works/Work_Details?${createSearchParams({id : e.id})}`}>
              <div className="work-col">
                <img src={e.img} alt="work1" />
                <div className="work-text">
                  <p>{e.title} </p>
                  <h5>{e.name} </h5>
                  <div className="arrow-im">
                    <img src={e.arrow} alt="arrow" />
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          {WorkData.slice(3, 6).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link to={`/Home/Our_Works/Work_Details?${createSearchParams({id : e.id})}`}>
              <div className="work-col">
                <img src={e.img} alt="work1" />
                <div className="work-text">
                  <p>{e.title} </p>
                  <h5>{e.name} </h5>
                  <div className="arrow-im">
                    <img src={e.arrow} alt="arrow" />
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          {WorkData.slice(6, 9).map((e, i) => (
            <div className="col-md-4" key={i}>
             <Link to={`/Home/Our_Works/Work_Details?${createSearchParams({id : e.id})}`}>
             <div className="work-col">
                <img src={e.img} alt="work1" />
                <div className="work-text">
                  <p>{e.title} </p>
                  <h5>{e.name} </h5>
                  <div className="arrow-im">
                    <img src={e.arrow} alt="arrow" />
                  </div>
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

export default WorkComponent2;
