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
