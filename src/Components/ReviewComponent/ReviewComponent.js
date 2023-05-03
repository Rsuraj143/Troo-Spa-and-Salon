import React from "react";
import "./ReviewComponent.css";
import { Link } from "react-router-dom";
import review1 from "../../Images/review-1.png";
import review2 from "../../Images/review-2.png";
import review3 from "../../Images/review-3.png";
import review4 from "../../Images/review-4.png";
import { FaStar } from "react-icons/fa";

const ReviewComponent = () => {
  return (
    <section className="troo-da-review-section" id="troo-da-review-section">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="reviwe-elipes">
              <div className="troo-tile">
                <span>Our Clients Review</span>
                <h2>What they are talking about our services</h2>
              </div>
              <p>
                It is a long established fact that it is also reader we arewill
                be distracted by the readable content of a page when looking at
                its layout. The point of using Lorem Ipsum is that it has a more
                less normal distribution of letters
              </p>
              <div className="make-btn">
                <Link to="/Home/Testimonial" className="btn btn-lg">
                  <span>View All Reviews</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <div className="review-ss">
                  <div className="review-star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p>
                    It is a long established fact that it is also reader jadge
                    we arewill be distracted by owen the readable and content of
                    a page.
                  </p>
                  <div className="client-img">
                    <img src={review1} alt="review1" />
                    <div className="cod-img">“</div>
                  </div>
                  <div className="client-del">
                    <h5>Sara Smith</h5>
                    <p>Client</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="review-ss elisha-col">
                  <div className="review-star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p>
                    It is a long established fact that it is also reader jadge
                    we arewill be distracted by owen the readable and content of
                    a page.
                  </p>
                  <div className="client-img">
                    <img src={review2} alt="review2" />
                    <div className="cod-img">“</div>
                  </div>
                  <div className="client-del">
                    <h5>Elisha headson</h5>
                    <p>Client</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row review2ndrow">
              <div className="col-md-6">
                <div className="review-ss">
                  <div className="review-star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p>
                    It is a long established fact that it is also reader jadge
                    we arewill be distracted by owen the readable and content of
                    a page.
                  </p>
                  <div className="client-img">
                    <img src={review3} alt="review3" />
                    <div className="cod-img">“</div>
                  </div>
                  <div className="client-del">
                    <h5>Sara Smith</h5>
                    <p>Client</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="review-ss elisha-col">
                  <div className="review-star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p>
                    It is a long established fact that it is also reader jadge
                    we arewill be distracted by owen the readable and content of
                    a page.
                  </p>
                  <div className="client-img">
                    <img src={review4} alt="review4" />
                    <div className="cod-img">“</div>
                  </div>
                  <div className="client-del">
                    <h5>Elisha headson</h5>
                    <p>Client</p>
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

export default ReviewComponent;
