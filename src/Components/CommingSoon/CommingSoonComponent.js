import React from 'react'
import "./CommingSoonComponent.css"
import women from "../../Images/woman-leg-relax.png"

const CommingSoonComponent = () => {
  return (
    <section class="coming-soon-seciton">
        <div class="coming-txt">
            <span>Coming Soon!</span>
            <div class="com-tle">Our new website is
                on its way.</div>
            <div class="search-container">
                <strong>Get notified when we launch.</strong>
                <form action="/action_page.php">
                    <input type="text" name="Email" placeholder="Enter Your Email" />
                    <button type="submit">Notify Me</button>
                </form>
            </div>
        </div>
        <div class="coming-img">
            <img src={women} alt='women' />
        </div>
    </section>
  )
}

export default CommingSoonComponent