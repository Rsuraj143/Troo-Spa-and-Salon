import React from "react";
import "./VideoComponent.css";
import videoIcon from "../../Images/video-icon.png"

const VideoComponent = () => {
  return (
    <section class="troo-da-video-section" id="troo-da-video-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="video-text">
              <span>
                Bringing peace to your body and mind with our services
              </span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="video-popu">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img src={videoIcon} alt="videoIcon" />
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;
