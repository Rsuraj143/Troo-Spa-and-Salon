import React from 'react'
import "./CommingSoonComponent.css"
import women from "../../Images/woman-leg-relax.png"

const CommingSoonComponent = () => {
  return (
    <section className="coming-soon-seciton">
        <div className="coming-txt">
            <span>Coming Soon!</span>
            <div className="com-tle">Our new website is
                on its way.</div>
            <div className="search-container">
                <strong>Get notified when we launch.</strong>
                <form action="/action_page.php">
                    <input type="text" name="Email" placeholder="Enter Your Email" />
                    <button type="submit">Notify Me</button>
                </form>
            </div>
        </div>
        <div className="coming-img">
            <img src={women} alt='women' />
        </div>
    </section>
  )
}

export default CommingSoonComponent