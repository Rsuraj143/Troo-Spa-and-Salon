import React, { useState } from "react";
import "./VideoComponent.css";
import videoIcon from "../../Images/video-icon.png";
import { IoCloseOutline } from "react-icons/io5";

const VideoComponent = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    if (!modal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    setModal(!modal);
  };

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
              <button onClick={openModal}>
                <img src={videoIcon} alt="videoIcon" />
                {modal ? (
                  <section className="modal__bg">
                    <div className="modal__align">
                      <div className="modal__content" modal={modal}>
                        <IoCloseOutline
                          className="modal__close"
                          arial-label="Close modal"
                          onClick={setModal}
                        />
                        <div className="modal__video-align">
                          <iframe
                            width="560"
                            height="500"
                            src="https://www.youtube.com/embed/DUfXdcpEfMs"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : null}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;
