import React from 'react'
import "./Error404Component.css"
import { Link } from 'react-router-dom'

const Error404component = () => {
  return (
    <section className="error-section">
        <div className="error-txt">
            <div className="err-pg">Error</div>
            <div className="err-tile">40 <strong>4</strong></div>
            <h3>Oops! We are sorry</h3>
            <p>But there is no result found :(</p>
            <div className="make-btn"> <Link to="/" className="btn btn-lg"> <span>Go to Homepage</span></Link></div>
        </div>
    </section>
  )
}

export default Error404component