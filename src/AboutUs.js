/** @format */

import React from "react";
import Layout from "./Layout";

const AboutUs = () => {
  return (
    <>
      <Layout>
        {/* ABOUT US AREA START */}
        <div className="ltn__about-us-area pt-25--- pb-120 mt-5 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="about-us-img-wrap about-img-left">
                  <img
                    src="assets/img/others/about-us.jpg"
                    alt="krishna-prasad-paudel"
                  />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="about-us-info-wrap">
                  <div className="section-title-area ltn__section-title-2--- mb-30">
                    <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color d-none">
                      About Us
                    </h6>
                    <h1 className="section-title">
                      Welcome to Achieve Healthcare: Your Partner in Health and
                      Wellness
                    </h1>
                    <p>
                      At Achieve Healthcare, we are more than just a medical
                      surgical house. We are your dedicated partners on the path
                      to realizing your health and wellness aspirations. With a
                      team of highly skilled medical professionals and
                      state-of-the-art facilities, we are here to guide,
                      support, and empower you every step of the way.
                    </p>
                  </div>
                  <ul className="ltn__list-item-1 ltn__list-item-1-before--- clearfix">
                    <li>
                      <i className="fas fa-check-square" /> Comprehensive
                      Surgical Excellence:
                    </li>
                    <li>
                      <i className="fas fa-check-square" /> Patient-Centered
                      Approach:
                    </li>
                    <li>
                      <i className="fas fa-check-square" /> Collaborative
                      Wellness:
                    </li>
                  </ul>
                  <div className="about-author-info-2 border-top mt-30 pt-20">
                    <ul>
                      <li>
                        <div className="about-author-info-2-brief  d-flex">
                          <div className="author-img">
                            <img
                              src="assets/img/blog/author.jpg"
                              alt="author-image"
                            />
                          </div>
                          <div className="author-name-designation">
                            <h4 className="mb-0">Krishna Prasad Paudel</h4>
                            <small>Managing Director</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="about-author-info-2-contact  d-flex">
                          <div className="about-contact-icon d-flex align-self-center mr-10">
                            <i className="icon-call" />
                          </div>
                          <div className="about-author-info-2-contact-info">
                            <small>Get Support</small>
                            <h6 className="mb-0">+977 9851073526</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT US AREA END */}

        {/* COUNTDOWN AREA END */}
        {/* FEATURE AREA START ( Feature - 6) */}
        <div className="ltn__feature-area pt-90 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center">
                  <h1 className="section-title">Core Features</h1>
                </div>
              </div>
            </div>
            <div className="row ltn__custom-gutter">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="ltn__feature-item ltn__feature-item-6 text-center">
                  <div className="ltn__feature-icon">
                    {/* <span><i class="flaticon-apartment"></i></span> */}
                    <img
                      src="assets/img/icons/icon-img/24.png"
                      alt="author-image"
                    />
                  </div>
                  <div className="ltn__feature-info">
                    <h4>
                      <a href="service-details.html">Free Service</a>
                    </h4>
                    <p>
                      Experience the convenience of free delivery on all your
                      orders. At Achieve Healthcare, we believe that access to
                      quality healthcare should be seamless and hassle-free.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="ltn__feature-item ltn__feature-item-6 text-center active">
                  <div className="ltn__feature-icon">
                    {/* <span><i class="flaticon-park"></i></span> */}
                    <img
                      src="assets/img/icons/icon-img/25.png"
                      alt="author-image"
                    />
                  </div>
                  <div className="ltn__feature-info">
                    <h4>
                      <a href="service-details.html">Prompt Service</a>
                    </h4>
                    <p>
                      When it comes to your health and well-being, time matters.
                      That's why we prioritize prompt service at Achieve
                      Healthcare.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="ltn__feature-item ltn__feature-item-6 text-center">
                  <div className="ltn__feature-icon">
                    {/* <span><i class="flaticon-maps-and-location"></i></span> */}
                    <img
                      src="assets/img/icons/icon-img/26.png"
                      alt="author-image"
                    />
                  </div>
                  <div className="ltn__feature-info">
                    <h4>
                      <a href="service-details.html">Quality Product</a>
                    </h4>
                    <p>
                      We are dedicated to your well-being, and we take pride in
                      offering you FDA-certified and ISO-certified products of
                      the highest quality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="ltn__feature-item ltn__feature-item-6 text-center">
                  <div className="ltn__feature-icon">
                    {/* <span><i class="flaticon-excavator"></i></span> */}
                    <img
                      src="assets/img/icons/icon-img/27.png"
                      alt="author-image"
                    />
                  </div>
                  <div className="ltn__feature-info">
                    <h4>
                      <a href="service-details.html">24/7 Support</a>
                    </h4>
                    <p>
                      Your health doesn't adhere to a schedule, and neither do
                      we. Our dedicated 24/7 support team is always ready to
                      assist you, day or night.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT US AREA START */}
        <div className="ltn__about-us-area pt-25--- pb-120 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="about-us-img-wrap about-img-left">
                  <img
                    src="assets/img/others/ot.png"
                    alt="doctor-doing-surgery"
                  />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="about-us-info-wrap">
                  <div className="section-title-area ltn__section-title-2--- mb-30">
                    <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color d-none">
                      About Us
                    </h6>
                    <h1 className="section-title">How We Started</h1>
                    <p>
                      Amid the challenges of Nepal's uncertain times, where
                      people are moving to cities and other countries for jobs
                      and education, the importance of good health is growing.
                    </p>

                    <p>
                      We dealt with things like anesthesia products, materials
                      to close wounds, and disposable items. But as we looked
                      ahead, we saw a bigger mission. So, in November 2013, we
                      launched Achieve Health Care. Our main goal was to provide
                      important tools for surgeries, like instruments and
                      equipment, as well as products to close wounds. Our
                      journey started with a strong focus on disposable surgical
                      items and diagnostic equipments, showing our dedication to
                      making healthcare better for everyone.
                    </p>
                    <p>
                      From a small partnership to our own business, we've come a
                      long way. Our journey has been about finding the best
                      healthcare solutions and making them available in Nepal.
                      We're committed to supporting the medical community and
                      helping Nepal's healthcare system improve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FEATURE AREA END */}
        {/* Why Choose US */}

        <div className="ltn__feature-area section-bg-1 pt-115 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2 text-center">
                  <h1 className="section-title">
                    Why Choose Us<span>.</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="ltn__feature-item ltn__feature-item-7">
                  <div className="ltn__feature-icon-title">
                    <div className="ltn__feature-icon">
                      <span>
                        <i className="fas fa-hand-holding-medical" />{" "}
                      </span>
                    </div>
                    <h3>
                      <a href="service-details.html">Quality Instruments</a>
                    </h3>
                  </div>
                  <div className="ltn__feature-info">
                    <p>
                      At our surgical house, we pride ourselves on providing
                      top-notch quality instruments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="ltn__feature-item ltn__feature-item-7">
                  <div className="ltn__feature-icon-title">
                    <div className="ltn__feature-icon">
                      {/* <span><img src="img/icons/icon-img/22.png" alt="author-image"></span> */}
                      <span>
                        <i className="fas fa-microscope" />{" "}
                      </span>
                    </div>
                    <h3>
                      <a href="service-details.html">
                        Experienced and Caring Team
                      </a>
                    </h3>
                  </div>
                  <div className="ltn__feature-info">
                    <p>
                      Our team consists of highly skilled medical professionals
                      who are not experts in their respective fields.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="ltn__feature-item ltn__feature-item-7">
                  <div className="ltn__feature-icon-title">
                    <div className="ltn__feature-icon">
                      {/* <span><img src="img/icons/icon-img/23.png" alt="author-image"></span> */}
                      <span>
                        <i className="fas fa-hospital" />{" "}
                      </span>
                    </div>
                    <h3>
                      <a href="service-details.html">
                        Comprehensive Hospital Solutions
                      </a>
                    </h3>
                  </div>
                  <div className="ltn__feature-info">
                    <p>
                      Your Complete Hospital Solutions Provider: Offering a
                      comprehensive range of products and services to meet all
                      your hospital needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TEAM AREA START (Team - 3) */}
        <div className="ltn__team-area pt-115 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center">
                  <h1 className="section-title">Our Active Members</h1>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 ">
                <div className="ltn__team-item ltn__team-item-3--- shadow-sm">
                  <div className="team-img">
                    <img
                      src="assets/img/team/krishna.png"
                      alt="krishna-paudel"
                      style={{ maxHeight: "368px" }}
                    />
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="team-details.html">Krishna Prasad Paudel</a>
                    </h4>
                    <h6 className="ltn__secondary-color">Managing Director</h6>
                    <div className="ltn__social-media">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__team-item ltn__team-item-3--- shadow-sm">
                  <div className="team-img">
                    <img
                      src="assets/img/team/ashok-paudel.png"
                      style={{ maxHeight: "368px" }}
                      alt="Image"
                    />
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="team-details.html">Er. Ashok Paudel</a>
                    </h4>
                    <h6 className="ltn__secondary-color">
                      Bio Medical Engineer
                    </h6>
                    <div className="ltn__social-media">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__team-item ltn__team-item-3--- shadow-sm">
                  <div className="team-img">
                    <img src="assets/img/team/astha-ghimire.png" alt="Image" />
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="team-details.html">Dr. Astha Ghimire</a>
                    </h4>
                    <h6 className="ltn__secondary-color">Quality Assurance</h6>
                    <div className="ltn__social-media">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__team-item ltn__team-item-3--- shadow-sm">
                  <div className="team-img">
                    <img
                      src="assets/img/team/laxman-sharma.png"
                      alt="Image"
                      style={{ minHeight: "368px" }}
                    />
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="team-details.html">Laxman Sharma</a>
                    </h4>
                    <h6 className="ltn__secondary-color">
                      Equipment Installation Engineer
                    </h6>
                    <div className="ltn__social-media">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__team-item ltn__team-item-3--- shadow-sm">
                  <div className="team-img">
                    <img src="assets/img/team/sumit-thakur.png" alt="Image" />
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="team-details.html">Sumit Kumar Thakur</a>
                    </h4>
                    <h6 className="ltn__secondary-color">
                      {" "}
                      Mid Western Regional Medical Director
                    </h6>
                    <div className="ltn__social-media">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__team-item ltn__team-item-3--- shadow-sm">
                  <div className="team-img">
                    <img
                      src="assets/img/team/raju-shrestha.png"
                      alt="Image"
                      style={{ maxHeight: "368px" }}
                    />
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="team-details.html">Raju Shrestha</a>
                    </h4>
                    <h6 className="ltn__secondary-color">
                      Eastern Regional Medical Director
                    </h6>
                    <div className="ltn__social-media">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__team-item ltn__team-item-3--- shadow-sm">
                  <div className="team-img">
                    <img
                      src="assets/img/team/udit-thakur.png"
                      alt="Image"
                      style={{ maxHeight: "368px" }}
                    />
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="team-details.html">Udit Kumar Thakur</a>
                    </h4>
                    <h6 className="ltn__secondary-color">Marketing Manager</h6>
                    <div className="ltn__social-media">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="ltn__team-item ltn__team-item-3--- shadow-sm">
                  <div className="team-img">
                    <img
                      src="assets/img/team/saran.png"
                      alt="Image"
                      style={{ maxHeight: "368px" }}
                    />
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="team-details.html">Sharan Thapa</a>
                    </h4>
                    <h6 className="ltn__secondary-color">Technician Head</h6>
                    <div className="ltn__social-media">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__team-item ltn__team-item-3--- shadow-sm">
                  <div className="team-img">
                    <img
                      src="assets/img/team/ganesh-shrestha.png"
                      style={{ maxHeight: "368px" }}
                      alt="Image"
                    />
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="team-details.html">Ganesh Shrestha</a>
                    </h4>
                    <h6 className="ltn__secondary-color">Technician Head</h6>
                    <div className="ltn__social-media">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__team-item ltn__team-item-3--- shadow-sm">
                  <div className="team-img">
                    <img
                      src="assets/img/team/ganesh-shrestha.png"
                      style={{ maxHeight: "368px" }}
                      alt="Image"
                    />
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="team-details.html">Sadhananda Padhya</a>
                    </h4>
                    <h6 className="ltn__secondary-color">Marketing Manager</h6>
                    <div className="ltn__social-media">
                      <ul>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;
