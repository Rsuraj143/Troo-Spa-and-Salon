import React from "react";
import "./BlogComponent.css";
import { Link, createSearchParams } from "react-router-dom";
import logo1 from "../../Images/logo1.png";
import logo2 from "../../Images/logo2.png";
import logo3 from "../../Images/logo3.png";
import logo4 from "../../Images/logo4.png";
import logo5 from "../../Images/logo5.png";
import logo6 from "../../Images/logo6.png";
import { BlogData } from "./BlogData";

const BlogComponent = () => {
  return (
    <section className="troo-da-blog-section" id="troo-da-blog-section">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="troo-tile">
              <span>Our news and blogs</span>
              <h2>Stay uptodate with our news and blogs</h2>
            </div>
          </div>
          <div className="col-md-7">
            <div className="blog-view-btn">
              <div className="make-btn">
                <Link to="/Home/Blogs" className="btn btn-lg">
                  <span>View All Blogs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {BlogData.slice(0, 3).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
              <div className="blog-section">
                <div className="blog-text">
                  <span>{e.date} </span>
                  <h4>{e.name} </h4>
                  <p>{e.para} </p>
                  <div className="blog-arrow">
                    <img src={e.arrow} alt="whiteArrow" />
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          {BlogData.slice(3, 5).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
              <div className="blog-section">
                <div className="blog-text">
                  <span>{e.date} </span>
                  <h4>{e.name} </h4>
                  <p>{e.para} </p>
                  <div className="blog-arrow">
                    <img src={e.arrow} alt="whiteArrow" />
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-2">
            <div className="brand-logo">
              <img src={logo1} alt="logo1" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="brand-logo">
              <img src={logo2} alt="logo2" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="brand-logo">
              <img src={logo3} alt="logo3" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="brand-logo">
              <img src={logo4} alt="logo4" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="brand-logo">
              <img src={logo5} alt="logo5" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="brand-logo">
              <img src={logo6} alt="logo6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
