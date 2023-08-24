/** @format */

import React from "react";
import Layout from "./Layout";

const AfterSalesService = () => {
  return (
    <Layout>
      <div className="ltn__about-us-area mt-60 mb-60 bg-image-left-before pt-115 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-left---" />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-20">
                  <h1 className="section-title">
                    After Sales Service: Your Partner in Continued Excellence
                  </h1>
                  <p>
                    At Achieve Health Care, our commitment to your satisfaction
                    extends far beyond the point of purchase. We believe that a
                    lasting partnership is built on exceptional after-sales
                    service. With a comprehensive range of offerings, we ensure
                    that your surgical equipment operates at its peak
                    performance, enabling you to deliver the best patient care
                    possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row  justify-content-center mb-50">
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
            <div className="ltn__feature-icon">
              {/* <img src="img/icons/icon-img/21.png" alt="#"> */}
            </div>
            <div className="ltn__feature-info">
              <h3>
                <a>Maintenance and Repair Services</a>
              </h3>
              <p>
                Count on us to keep your surgical equipment in prime condition.
                Our skilled technicians are trained to diagnose and rectify any
                issues swiftly. Regular maintenance ensures optimal
                functionality and extends the lifespan of your investments. We
                understand that downtime is not an option, and our dedicated
                team is here to get you up and running with minimal disruption.
              </p>
              {/* <a class="ltn__service-btn" href="service-details.html">Find A Home <i class="flaticon-right-arrow"></i></a> */}
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
            <div className="ltn__feature-icon">
              {/* <span>
                <i className="flaticon-stethoscope" />
              </span> */}
              {/* <img src="img/icons/icon-img/21.png" alt="#"> */}
            </div>
            <div className="ltn__feature-info">
              <h3>
                <a>Immediate Spare Parts Availability</a>
              </h3>
              <p>
                Efficiency is crucial in healthcare settings. That's why we
                maintain a ready inventory of genuine spare parts for your
                equipment. When you need replacements, we're prepared to provide
                them promptly. Rest assured that our spare parts are sourced
                directly from manufacturers, ensuring compatibility and
                reliability.
              </p>
              {/* <a class="ltn__service-btn" href="service-details.html">Find A Home <i class="flaticon-right-arrow"></i></a> */}
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
            <div className="ltn__feature-icon">
              {/* <span>
                <i className="flaticon-hospital" />
              </span> */}
              {/* <img src="img/icons/icon-img/21.png" alt="#"> */}
            </div>
            <div className="ltn__feature-info">
              <h3>
                <a>Professional Training Services</a>
              </h3>
              <p>
                Surgical techniques and technology evolve rapidly. To help you
                keep pace, we offer specialized training sessions. Our
                experienced trainers provide hands-on guidance, allowing your
                staff to harness the full potential of your equipment. Whether
                it's a new system or a refresher course, our training programs
                empower your team to deliver exceptional patient outcomes.
              </p>
              {/* <a class="ltn__service-btn" href="service-details.html">Find A Home <i class="flaticon-right-arrow"></i></a> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AfterSalesService;
