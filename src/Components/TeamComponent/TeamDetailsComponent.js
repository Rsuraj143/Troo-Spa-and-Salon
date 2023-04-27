import React from 'react'
import "./TeamDetailsComponent.css"
import teammember from "../../Images/team-member.png";
import fluentCall from "../../Images/fluent_call.png";
import mail from "../../Images//mail-04.png";
import fb from "../../Images/Facebook.png";
import twit from "../../Images/Twitter.png";
import insta from "../../Images/Instagram.png";
import { Link } from "react-router-dom";
import check from "../../Images/check.png";

const TeamDetailsComponent = () => {
  return (
    <section
      class="troo-da-team-detail-section"
      id="troo-da-team-detail-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="team-member">
              <img src={teammember} alt="teammember" />
              <div class="team-member-details">
                <h5>Contact With Her</h5>
                <div class="team-call">
                  <div class="img-team-call">
                    <img src={fluentCall} alt="fluentCall" />
                  </div>
                  <div class="tema-link-call">
                    <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                  </div>
                </div>
                <div class="team-call">
                  <div class="img-team-call">
                    <img src={mail} alt="mail" />
                  </div>
                  <div class="tema-link-call">
                    <a href="mailto:alexa@troothmes.com">alexa@troothmes.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-7">
            <div class="teams-details">
              <div class="team-member-name">
                <div class="postion-team">
                  <h4>Alexa Boss</h4>
                  <p>Founder and CEO</p>
                </div>
                <div class="socail-icons">
                  <ul>
                    <li>
                      <Link href="#">
                        <img src={fb} alt="fb" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img src={twit} alt="twit" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img src={insta} alt="insta" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="des-team">
                <h5>I help my clients stand out and they help me grow.</h5>
                <p>
                  Forem ipsum dolor sit amet consectetur adipiscing elitsed do
                  eiusmod tempincididunt ut labore et dolore magna aliqua.Ut
                  enim ad minim venostrud exercitation ullamco labori.
                </p>
                <h5>Areas of Expertise:</h5>
                <ul>
                  <li>
                    <img src={check} alt="check" />
                    <span>Every lorem ipsum dollr sit amet just dummy.</span>
                  </li>
                  <li>
                    <img src={check} alt="check" />
                    <span>
                      Using powerful lorem ipsum dollr sit amet just dummy.
                    </span>
                  </li>
                  <li>
                    <img src={check} alt="check" />
                    <span>Lorem ipsum dollr sit amet just dummy.</span>
                  </li>
                </ul>
              </div>
              <div class="des-team">
                <h5>Education History</h5>
                <ul>
                  <li>
                    <img src={check} alt="check" />
                    <span>Every lorem ipsum dollr sit amet just dummy.</span>
                  </li>
                  <li>
                    <img src={check} alt="check" />
                    <span>
                      Using powerful lorem ipsum dollr sit amet just dummy.
                    </span>
                  </li>
                  <li>
                    <img src={check} alt="check" />
                    <span>Lorem ipsum dollr sit amet just dummy.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamDetailsComponent