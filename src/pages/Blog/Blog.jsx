import React from "react";
import "./Blog.css";
import BlogImageOne from "../../assets/images/blog1.jpg";
import BlogImageTwo from "../../assets/images/blog2.jpg";
import BlogImageThree from "../../assets/images/blog3.jpg";
import arrow from "../../assets/images/right-arrow.svg"

const Blog = () => {
  return (
    <div className="blog">
      <div className="container_acb blog-box">
        <div className="blog-title">
          <h5>Аренда люксовых и спортивных авто / ПОЛЕЗНЫЕ СТАТЬИ</h5>
          <h2>ПОЛЕЗНЫЕ СТАТЬИ</h2>
        </div>
        <div className="blog-item_box">
          <div className="blog-item">
            <img src={BlogImageOne} alt="img1" />
            <div className="blog-item_description">
              <h3>Top 3 Destinations to Visit in Dubai in a Rental Car</h3>
              <p>
                One of the main reasons to hire a car in Dubai is the quality of
                the UAE roads. According to the World Economic Forum, the
                Emirates belong to the top seven countries with the most
                exemplary road infrastructure.
              </p>
              <div className="blog-item_description--bottom">
                <span>25 Seb 2022</span>
                <img src={arrow} alt="image" />
              </div>
            </div>
          </div>
          <div className="blog-item">
            <img src={BlogImageTwo} alt="img1" />
            <div className="blog-item_description">
              <h3>Top 3 Destinations to Visit in Dubai in a Rental Car</h3>
              <p>
                One of the main reasons to hire a car in Dubai is the quality of
                the UAE roads. According to the World Economic Forum, the
                Emirates belong to the top seven countries with the most
                exemplary road infrastructure.
              </p>
              <div className="blog-item_description--bottom">
                <span>25 Seb 2022</span>
                <img src={arrow} alt="image" />
              </div>
            </div>
          </div>
          <div className="blog-item">
            <img src={BlogImageThree} alt="img1" />
            <div className="blog-item_description">
              <h3>Top 3 Destinations to Visit in Dubai in a Rental Car</h3>
              <p>
                One of the main reasons to hire a car in Dubai is the quality of
                the UAE roads. According to the World Economic Forum, the
                Emirates belong to the top seven countries with the most
                exemplary road infrastructure.
              </p>
              <div className="blog-item_description--bottom">
                <span>25 Seb 2022</span>
                <img src={arrow} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
