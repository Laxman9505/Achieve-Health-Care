/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { redirectToMaps } from "./mapRedirect";

const Footer = () => {
  return (
    <footer className="ltn__footer-area  ">
      <div className="footer-top-area  section-bg-1 plr--5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-about-widget">
                <div className="footer-logo">
                  <div className="site-logo">
                    <img
                      src="assets/img/logo.png"
                      style={{ width: "70%" }}
                      alt="Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title">About Us</h4>
                <div className="footer-menu">
                  <p>
                    We are a leading provider of high-quality medical equipment
                    and supplies, dedicated to improving healthcare solutions
                    worldwide. Contact us at{" "}
                    <a href="mailto:achievehealthcare@gmail.com">
                      achievehealthcare@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title">Resources</h4>
                <div className="footer-menu">
                  <ul>
                    <li className="menu-icon">
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li className="menu-icon">
                      <Link to="/our-services">Our Services</Link>
                    </li>

                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/after-sales-services">
                        After Sales Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12 col-12">
              <div className="footer-widget footer-newsletter-widget">
                <h4 className="footer-title">Reach Us</h4>

                <div className="footer-newsletter">
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-placeholder" />
                        </div>
                        <div className="footer-address-info">
                          <a
                            onClick={() => {
                              redirectToMaps();
                            }}
                          >
                            Baneshwor, Kathmandu
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-call" />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="tel:+977 9851073526">+977 9851073526</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-mail" />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="mailto:achievehealthcare@gmail.com">
                              achievehealthcare@gmail.com
                            </a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="ltn__social-media mt-20">
                    <ul>
                      <li>
                        <a href="#" title="Facebook">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Twitter">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Linkedin">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Youtube">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
        <div className="container-fluid ltn__border-top-2">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="ltn__copyright-design clearfix">
                <p>
                  All Rights Reserved @Achieve Health Care{" "}
                  <span className="current-year" />
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 align-self-center">
              <div className="ltn__copyright-menu text-end">
                <ul>
                  {/* <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Claim</a>
                  </li>
                  <li>
                    <a href="#">Privacy &amp; Policy</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
