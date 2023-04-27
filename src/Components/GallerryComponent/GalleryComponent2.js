import React from "react";
import "./GalleryComponent.css";
import gallery5 from "../../Images/gallery-5.png";
import gallery6 from "../../Images/gallery-6.png";
import gallery7 from "../../Images/gallery-7.png";
import gallery8 from "../../Images/gallery-8.png";
import gallery9 from "../../Images/gallery-9.png";
import gallery10 from "../../Images/gallery-10.png";
import gallery11 from "../../Images/gallery-11.png";
import gallery12 from "../../Images/gallery-12.png";
import gallery13 from "../../Images/gallery-13.png";
import gallery14 from "../../Images/gallery-14.png";
import gallery15 from "../../Images/gallery-15.png";
import gallery16 from "../../Images/gallery-16.png";
import gallery17 from "../../Images/gallery-17.png";
import gallery18 from "../../Images/gallery-18.png";
import gallery19 from "../../Images/gallery-19.png";

const GalleryComponent2 = () => {
  return (
    <section class="troo-da-gallery-section" id="troo-da-gallery-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="troo-tile">
              <span>Our Gallery</span>
              <h2>Let we see some pics for you</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="gallery-col">
              <img src={gallery5} alt="gallery5" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-col">
              <img src={gallery6} alt="gallery6" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-col">
              <img src={gallery7} alt="gallery7" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="gallery-col">
              <img src={gallery8} alt="gallery8" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-col">
              <img src={gallery9} alt="gallery9" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-col">
              <img src={gallery10} alt="gallery10" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="gallery-col">
              <img src={gallery11} alt="gallery11" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-col">
              <img src={gallery12} alt="gallery12" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-col">
              <img src={gallery13} alt="gallery13" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="gallery-col">
              <img src={gallery14} alt="gallery14" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-col">
              <img src={gallery15} alt="gallery15" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-col">
              <img src={gallery16} alt="gallery16" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="gallery-col">
                <img src={gallery17} alt="gallery17" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="gallery-col">
                <img src={gallery18} alt="gallery18" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="gallery-col">
                <img src={gallery19} alt="gallery19" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryComponent2;
