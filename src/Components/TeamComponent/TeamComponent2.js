import React from "react";
import "./TeamComponent.css";
import { TeamData } from "./TeamData";
import { Link, createSearchParams } from "react-router-dom";

const TeamComponent2 = () => {
  return (
    <section className="troo-da-team-section" id="troo-da-team-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="troo-tile">
              <span>Our owesome team</span>
              <h2>We have best therapist for you</h2>
            </div>
          </div>
          <div className="row">
            {TeamData.slice(0, 3).map((e, i) => (
              <div className="col-md-4" key={i}>
               <Link to={`/Home/Our_Team/Team_Details?${createSearchParams({id : e.id})}`}>
               <div className="team-col">
                  <div className="team-img">
                    <img src={e.img} alt="team1" />
                    <div className="plus-minus-toggle">
                      <div className="socaik-icon">
                        {e.social.map((ele, ind) => (
                          <Link to={ele.path}>
                            <img src={ele.icon} alt="insta" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="team-dails">
                    <h4>{e.name}</h4>
                    <p>{e.Title} </p>
                  </div>
                </div>
               </Link>
              </div>
            ))}
          </div>
          <div className="row">
            {TeamData.slice(3, 6).map((e, i) => (
              <div className="col-md-4" key={i}>
                <Link to={`/Home/Our_Team/Team_Details?${createSearchParams({id : e.id})}`}>
                <div className="team-col">
                  <div className="team-img">
                    <img src={e.img} alt="team1" />
                    <div className="plus-minus-toggle">
                      <div className="socaik-icon">
                        {e.social.map((ele, ind) => (
                          <Link to={ele.path}>
                            <img src={ele.icon} alt="insta" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="team-dails">
                    <h4>{e.name}</h4>
                    <p>{e.Title} </p>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent2;
