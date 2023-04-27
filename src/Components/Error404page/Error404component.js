import React from 'react'
import "./Error404Component.css"
import { Link } from 'react-router-dom'

const Error404component = () => {
  return (
    <section class="error-section">
        <div class="error-txt">
            <div class="err-pg">Error</div>
            <div class="err-tile">40 <strong>4</strong></div>
            <h3>Oops! We are sorry</h3>
            <p>But there is no result found :(</p>
            <div class="make-btn"> <Link to="/" class="btn btn-lg"> <span>Go to Homepage</span></Link></div>
        </div>
    </section>
  )
}

export default Error404component