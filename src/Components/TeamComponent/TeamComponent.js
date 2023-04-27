import React from 'react'
import "./TeamComponent.css"
import { Link } from 'react-router-dom'
import team1 from "../../Images/team-1.png"
import team2 from "../../Images/team-2.png"
import team3 from "../../Images/team-3.png"
import insta from "../../Images/Instagram.png"
import twitter from "../../Images/Twitter.png"
import facebook from "../../Images/Facebook.png"

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
          <div class="col-md-4">
            <div class="team-col">
              <div class="team-img">
                <img src={team1} alt='team1' />
                <div class="plus-minus-toggle">
                  <div class="socaik-icon">
                    <img src={insta} alt='insta' />
                    <img src={twitter} alt='twitter' />
                    <img src={facebook} alt='facebook' />
                  </div>
                </div>
              </div>
              <div class="team-dails">
                <h4>Alexa Boss</h4>
                <p>CEO and Founder</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-col">
              <div class="team-img">
                <img src={team2} alt='team2' />
                <div class="plus-minus-toggle">
                <div class="socaik-icon">
                    <img src={insta} alt='insta' />
                    <img src={twitter} alt='twitter' />
                    <img src={facebook} alt='facebook' />
                  </div>
                </div>
              </div>
              <div class="team-dails">
                <h4>Lizza Hessan</h4>
                <p>Therapist</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-col">
              <div class="team-img">
                <img src={team3} alt='team3' />
                <div class="plus-minus-toggle">
                <div class="socaik-icon">
                    <img src={insta} alt='insta' />
                    <img src={twitter} alt='twitter' />
                    <img src={facebook} alt='facebook' />
                  </div>
                </div>
              </div>
              <div class="team-dails">
                <h4>Martha Jax </h4>
                <p>Therapist</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="make-btn"> <Link href="#" class="btn btn-lg"> <span>View All Member</span></Link></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TeamComponent