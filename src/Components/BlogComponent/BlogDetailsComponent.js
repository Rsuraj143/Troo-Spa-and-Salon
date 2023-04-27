import React from "react";
import blockimg from "../../Images/services-deails.png"
import blog99 from "../../Images/blog90.png"
import blogdtls1 from "../../Images/services-deails-2.png"
import blogdtls2 from "../../Images/services-deails-3.png"
import fb from "../../Images/Facebook.png"
import twtr from "../../Images/Twitter.png"
import insta from "../../Images/Instagram.png"
import { Link } from "react-router-dom";
import "./BlogDetailsComponent.css"

const BlogDetailsComponent = () => {
  return (
    <section
      class="troo-da-services-details-section"
      id="troo-da-services-details-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="services-detils-ss">
              <div class="ser-img">
                <img src={blockimg} alt="blockimg" />
              </div>
              <div class="ser-text">
                <h4>Discription</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printin and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printin and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s.
                </p>
                <h4>Your title goes here</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printin and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
            <div class="provied-ss  blog-de-txt">
              <div class="pro-icon">
                <img src={blog99} alt="blog99" />
              </div>
              <div class="pro-txt">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry simply
                  dummy text of the printing and{" "}
                </p>
                <div class="bloger">
                  <h5>
                    Maria miranda, <span>CEO and Founder</span>
                  </h5>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="ser-bttom-img">
                  <img src={blogdtls1} alt="blockdtls1" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="ser-bttom-img">
                  <img src={blogdtls2} alt="blogdtls2" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="title-goes">
                  <h4> Your title goes here</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printin and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
                <div class="share-socail-icon">
                  <p>Share This Articl</p>
                  <div class="socail-icons">
                    <ul>
                      <li>
                        <Link to="#">
                          <img src={fb} alt="fb" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src={twtr} alt="twtr" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src={insta} alt="insta" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="commet-from contact-form">
              <h4>Comments (0)</h4>
              <span>Submit a Comment</span>
              <form class="row g-3">
                <div class="col-md-12">
                  <label for="inputName" class="form-label">
                    Enter Your Name
                  </label>
                  <input
                    type="Name"
                    class="form-control"
                    id="inputName"
                    placeholder="John Doe"
                  />
                </div>
                <div class="col-12">
                  <label for="inputEmail" class="form-label">
                    Enter Your Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="iamjohndoe@email.com"
                  />
                </div>

                <div class="col-md-12">
                  <label for="inputMessage" class="form-label">
                    Message
                  </label>
                  <textarea
                    name="Your Message"
                    id="YourMessage"
                    cols="30"
                    rows="10"
                    placeholder="Write somethings......."
                  ></textarea>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-4">
            <div class="sidebar">
              <div class="therapy-detail">
                <h4>Blog Detail</h4>
                <ul>
                  <li>
                    <span>Published:</span>
                    <strong>22 Dec, 2022</strong>
                  </li>
                  <li>
                    <span>Writen By: </span>
                    <strong>John Johnson</strong>
                  </li>
                  <li>
                    <span>Category: </span>
                    <strong>Spa and Therapy</strong>
                  </li>
                </ul>
              </div>
              <div class="therapy-detail more-services blog-cat">
                <h4>Categories</h4>
                <ul>
                  <li>
                    Facials Therapy <span>10</span>
                  </li>
                  <li>
                    Body Treatments<span>15</span>
                  </li>
                  <li>
                    Finishing Touches<span>11</span>
                  </li>
                  <li>
                    Hands & Feet<span>05</span>
                  </li>
                  <li>
                    Aroma Therapy<span>13</span>
                  </li>
                  <li>
                    Medicure - Pedicure<span>10</span>
                  </li>
                  <li>
                    Hair Color<span>14</span>
                  </li>
                  <li>
                    Hair Cutting<span>03</span>{" "}
                  </li>
                  <li>
                    Stone Therapy<span>11</span>
                  </li>
                  <li>
                    Body Massage<span>08</span>
                  </li>
                </ul>
              </div>
              <div class="therapy-detail tages">
                <h4>Tags</h4>
                <ul>
                  <li>Therapy</li>
                  <li>Massage</li>
                  <li>Body Treatments</li>
                </ul>
                <ul class="hri-s">
                  <li>Hair and Salon</li>
                  <li>Body Massage</li>
                  <li>Aroma</li>
                </ul>
              </div>
              <div class="offer-section">
                <div class="off-text">
                  <span>Spa and Salon</span>
                  <strong>30%</strong>
                  <p>Discount on Massage and spa Therapy</p>
                </div>
              </div>
              <div class="book-ss">
                <h4>Book an Appointment</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsComponent;
