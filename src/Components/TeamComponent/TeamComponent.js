import React from "react";
import "./TeamComponent.css";
import { Link, createSearchParams } from "react-router-dom";
import { TeamData } from "./TeamData";

const TeamComponent = () => {
  return (
    <section class="troo-da-team-section" id="troo-da-team-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="troo-tile">
              <span>Our owesome team</span>
              <h2>We have best therapist for you</h2>
            </div>
          </div>
          <div class="row">
            {TeamData.slice(0, 3).map((e, i) => (
              <div class="col-md-4" key={i}>
              <Link to={`/Home/Our_Team/Team_Details?${createSearchParams({id : e.id})}`}>
              <div class="team-col">
                  <div class="team-img">
                    <img src={e.img} alt="team1" />
                    <div class="plus-minus-toggle">
                      <div class="socaik-icon">
                        {e.social.map((ele, ind) => (
                          <Link to={ele.path}>
                            <img src={ele.icon} alt="insta" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div class="team-dails">
                    <h4>{e.name}</h4>
                    <p>{e.Title} </p>
                  </div>
                </div>
              </Link>
              </div>
            ))}
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="make-btn">
                <Link to="/Home/Our_Team" class="btn btn-lg">
                  <span>View All Member</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;
