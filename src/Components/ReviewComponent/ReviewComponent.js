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
    <section class="troo-da-review-section" id="troo-da-review-section">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="reviwe-elipes">
              <div class="troo-tile">
                <span>Our Clients Review</span>
                <h2>What they are talking about our services</h2>
              </div>
              <p>
                It is a long established fact that it is also reader we arewill
                be distracted by the readable content of a page when looking at
                its layout. The point of using Lorem Ipsum is that it has a more
                less normal distribution of letters
              </p>
              <div class="make-btn">
                <Link to="/Home/Testimonial" class="btn btn-lg">
                  <span>View All Reviews</span>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="row">
              <div class="col-md-6">
                <div class="review-ss">
                  <div class="review-star">
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
                  <div class="client-img">
                    <img src={review1} alt="review1" />
                    <div class="cod-img">“</div>
                  </div>
                  <div class="client-del">
                    <h5>Sara Smith</h5>
                    <p>Client</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="review-ss elisha-col">
                  <div class="review-star">
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
                  <div class="client-img">
                    <img src={review2} alt="review2" />
                    <div class="cod-img">“</div>
                  </div>
                  <div class="client-del">
                    <h5>Elisha headson</h5>
                    <p>Client</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="review-ss">
                  <div class="review-star">
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
                  <div class="client-img">
                    <img src={review3} alt="review3" />
                    <div class="cod-img">“</div>
                  </div>
                  <div class="client-del">
                    <h5>Sara Smith</h5>
                    <p>Client</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="review-ss elisha-col">
                  <div class="review-star">
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
                  <div class="client-img">
                    <img src={review4} alt="review4" />
                    <div class="cod-img">“</div>
                  </div>
                  <div class="client-del">
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
