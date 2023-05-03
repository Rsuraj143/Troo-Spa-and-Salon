import React from 'react'
import "./GalleryComponent.css"
import gallery1 from "../../Images/gallery-1.png"
import gallery2 from "../../Images/gallery-2.png"
import gallery3 from "../../Images/gallery-3.png"
import gallery4 from "../../Images/gallery-4.png"
import { Link } from 'react-router-dom'

const GalleryComponent = () => {
  return (
    <section className="troo-da-gallery-section" id="troo-da-gallery-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="troo-tile">
            <span>Our Gallery</span>
            <h2>Let we see some pics for you</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6">
              <div className="gallery-section">
                <img src={gallery1} alt='gallery1' />
              </div>
            </div>
            <div className="col-md-6">
              <div className="gallery-section">
                <img src={gallery2} alt='gallery2' />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="gallery-section">
                <img src={gallery3} alt='gallery3' />
              </div>
              <div className="gallery-text">
                <h4>Want see more photos? <Link to="/Home/Gallery">Click here</Link></h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gallery-section">
            <img src={gallery4} alt='gallery4' />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GalleryComponent