/** @format */

import React from "react";
import Layout from "./Layout";
import { redirectToMaps } from "./mapRedirect";

const ContactUs = () => {
  return (
    <Layout>
      <div className="ltn__contact-address-area mb-90 mt-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="assets/img/icons/10.png" alt="Icon Image" />
                </div>
                <h3>Email Address</h3>
                <p>
                  {" "}
                  <a href="mailto:achievehealthcare@gmail.com">
                    achievehealthcare@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="assets/img/icons/11.png" alt="Icon Image" />
                </div>
                <h3>Phone Number</h3>
                <p>
                  {" "}
                  <a href="tel:+977 9851073526">+977 9851073526</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="assets/img/icons/12.png" alt="Icon Image" />
                </div>
                <h3>Office Address</h3>
                <p
                  onClick={() => {
                    redirectToMaps();
                  }}
                >
                  Baneshwor, Kathmandu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GOOGLE MAP AREA START */}
      <div className="google-map mb-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1766.371991889173!2d85.3468972!3d27.6943066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19628e10de59%3A0xa38d030c0157f76d!2sAchieve%20Health%20Care!5e0!3m2!1sen!2snp!4v1692513041803!5m2!1sen!2snp"
          width="100%"
          height="100%"
          frameBorder={0}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </Layout>
  );
};

export default ContactUs;
