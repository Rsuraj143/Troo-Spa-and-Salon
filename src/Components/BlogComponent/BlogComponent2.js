import React from "react";
import "./BlogComponent.css";
import { BlogData } from "./BlogData";
import { Link, createSearchParams } from "react-router-dom";

const BlogComponent2 = () => {
  return (
    <section className="troo-da-blog-section" id="troo-da-blog-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="troo-tile">
              <span>Our news and blogs</span>
              <h2>Stay uptodate with our news and blogs</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {BlogData.slice(0, 3).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link
                to={`/Home/Blogs/Blog_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
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
          {BlogData.slice(3, 6).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link
                to={`/Home/Blogs/Blog_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
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
          {BlogData.slice(6, 9).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link
                to={`/Home/Blogs/Blog_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
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
          {BlogData.slice(9, 12).map((e, i) => (
            <div className="col-md-4" key={i}>
              <Link
                to={`/Home/Blogs/Blog_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
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
      </div>
    </section>
  );
};

export default BlogComponent2;
