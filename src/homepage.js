/** @format */

import { Carousel } from "antd";
import React from "react";
// Import Bootstrap CSS in your JavaScript file
import "bootstrap-icons/font/bootstrap-icons.css";
// Import Font Awesome CSS in your JavaScript file
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import productsData from "./products.json"; // Assuming products.json is in the same directory

const HomePage = () => {
  const allSubCategories = productsData?.categories.reduce(
    (subCategories, category) => {
      return subCategories.concat(category.subCategories);
    },
    []
  );

  console.log("all sub categories", allSubCategories);
  // <iframe
  //   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1766.371991889173!2d85.3468972!3d27.6943066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19628e10de59%3A0xa38d030c0157f76d!2sAchieve%20Health%20Care!5e0!3m2!1sen!2snp!4v1692513041803!5m2!1sen!2snp"
  //   width={600}
  //   height={450}
  //   style={{ border: 0 }}
  //   allowFullScreen=""
  //   loading="lazy"
  //   referrerPolicy="no-referrer-when-downgrade"
  // />;
  return (
    <>
      <Layout>
        <div className="carousel-container">
          <Carousel autoplay>
            <div className="carousel-slide">
              <img src="assets/img/home/banner2.png" alt="Image 2" />
              <div className="carousel-caption">
                <h3 style={{ color: "white" }}>
                  Welcome to Achieve Healthcare - Your Trusted Partner in
                  Medical Excellence
                </h3>
                <h4>
                  Empowering Healthcare Professionals with Precision Instruments
                </h4>
              </div>
            </div>
            {/* Add more slides */}
          </Carousel>
        </div>

        {/* CATEGORY AREA START */}
        <div className="ltn__category-area section-bg-1-- pt-50 pb-90">
          <div className="container">
            <div className="row border-bottom">
              {allSubCategories?.map((item, index) => {
                return (
                  <div className="col-4 col-md-2" key={index}>
                    <div className="ltn__category-item ltn__category-item-6 text-center">
                      <div className="ltn__category-item-img">
                        <Link to={`/products?type=${item.type}`}>
                          <i className={item.icon}></i> {/* Needle Icon */}
                        </Link>
                      </div>
                      <div className="ltn__category-item-name">
                        <h6>
                          <Link to={`/products?type=${item.type}`}>
                            {item.name}
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
