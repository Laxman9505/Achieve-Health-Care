/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      {/* ltn__header-top-area start */}
      <div className="ltn__header-top-area border-bottom top-area-color-white---">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="ltn__top-bar-menu">
                <ul>
                  <li>
                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                      <i className="icon-mail" /> achievehealthcare@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                      <i className="icon-placeholder" /> Shantinagar, Baneshwor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="top-bar-right text-end">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>{/* ltn__social-media */}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ltn__header-top-area end */}
      {/* ltn__header-middle-area start */}
      <div className="ltn__header-middle-area ltn__logo-right-menu-option ltn__header-row-bg-white ltn__header-padding ltn__header-sticky ltn__sticky-bg-white">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="site-logo-wrap">
                <div className="site-logo">
                  <Link to={"/"}>
                    <img
                      src="assets/img/logo.png"
                      alt="Logo"
                      className="w-20"
                      style={{ width: "100px" }}
                    />
                  </Link>
                </div>
                <div className="get-support clearfix d-none">
                  <div className="get-support-icon">
                    <i className="icon-call" />
                  </div>
                  <div className="get-support-info">
                    <h6>Get Support</h6>
                    <h4>
                      <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                        123-456-789-10
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 header-menu-column menu-color-white---">
              <div className="header-menu d-none d-xl-block">
                <nav>
                  <div className="ltn__main-menu">
                    <ul>
                      <li className="menu-icon">
                        <Link to={"/"}>Home</Link>
                      </li>

                      <li className="menu-icon w-30">
                        <a href="index.html">Products</a>
                        <ul>
                          <li>
                            <a href="index.html">
                              Surgical Disposable Items
                              <span
                                className="float-right"
                                style={{ marginLeft: "10px" }}
                              >
                                &gt;
                              </span>
                            </a>
                            <ul>
                              <li>
                                <Link to={"/products?type=surgical-sutures"}>
                                  Surgical Sutures
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </Link>
                                <ul>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Absorbable Sutures
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Non Absorbable Sutures
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to={"/products?type=surgical-meshes"}>
                                  Surgical Meshes
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </Link>
                                <ul>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Polypropylene Mesh
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Light Surgical Mesh
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Composite Mesh
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Mesh Fixed Device
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Prolapse Mesh
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link
                                  to={
                                    "products?type=surgical-stapling-products"
                                  }
                                >
                                  Surgical Stapling Products
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </Link>
                                <ul>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Endoscopic Linear Cutter Staplers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Linear Cutter Staplers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Linear Staplers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Curved Cutting Staplers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Circular Staplers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Hemorrhoids Staplers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Skin Staplers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Ligaton Clips
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Hamelock Clips
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to={"products?type=eurology-products"}>
                                  Eurology Products
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </Link>
                                <ul>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Ureteral Stents
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Hydrophilic Guidewire
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link
                                  to={"/products?type=laparoscopic-instruments"}
                                >
                                  Laparoscopic Instruments
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </Link>
                                <ul>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Disposable trocars
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Disposable laparoscopic scissors
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Clip Appliers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Disposable Laparoscopic Merryland
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to={"/products?type=orthopedic-implants"}>
                                  Orthopedic Implants
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </Link>
                                <ul>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Spine Implants
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Trauma Implants
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Maxillofacial Implants
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link
                                  to={
                                    "/products?type=electrosurgery-instruments"
                                  }
                                >
                                  Electrosurgery Instruments
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </Link>
                                <ul>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Electrosurgical Pencils
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Electrosurgical Plates (Grounding Pads)
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link
                                  to={
                                    "/products?type=surgical-suction-and-drainage"
                                  }
                                >
                                  Surgical Suction and Drainage
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </Link>
                                <ul>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Wound Drainage Sets
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Yankauer Suction Tips
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link
                                  to={"/products?type=compression-stockings"}
                                >
                                  Compression Stockings
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </Link>
                                <ul>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Anti-Embolism Stockings
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Varicose Vein Stockings
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="index.html">
                              Equipments and Instruments{" "}
                              <span
                                className="float-right"
                                style={{ marginLeft: "10px" }}
                              >
                                &gt;
                              </span>
                            </a>
                            <ul>
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  Hospital Furnitures
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </a>
                                <ul>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Patient Stretcher
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Emergency stretchers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Hospital Bed
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Bedside Cabinets
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      ICU beds
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  Operating Room Equipment
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </a>
                                <ul>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Electric Operating Table
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Manual Operating Table
                                    </a>
                                  </li>{" "}
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Delivery Table
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Surgical Table
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      OT Lights
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Laparoscopic Tower And Instruments
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Open Surgery Instruments
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Anesthesia Machine
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Electro Surgical Unit
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="index.html">
                              Diagnostic Equipments
                              <span
                                className="float-right"
                                style={{ marginLeft: "10px" }}
                              >
                                &gt;
                              </span>
                            </a>
                            <ul>
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  X-ray Machine
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  Ultrasound Machine
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  Labrotary Equpment
                                  <span
                                    className="float-right"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    &gt;
                                  </span>
                                </a>
                              </li>{" "}
                            </ul>
                          </li>
                        </ul>
                      </li>
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
                </nav>
              </div>
            </div>
            <div className="col--- ltn__header-options ltn__header-options-2 mb-sm-20">
              {/* header-search-1 */}
              {/* <div className="header-search-wrap">
                    <div className="header-search-1">
                      <div className="search-icon">
                        <i className="icon-search for-search-show" />
                        <i className="icon-cancel  for-search-close" />
                      </div>
                    </div>
                    <div className="header-search-1-form">
                      <form
                        id="product-details.html"
                        method="get"
                        action="product-details.html"
                      >
                        <input
                          type="text"
                          name="search"
                          defaultValue=""
                          placeholder="Search here..."
                        />
                        <button type="submit">
                          <span>
                            <i className="icon-search" />
                          </span>
                        </button>
                      </form>
                    </div>
                  </div> */}
              {/* user-menu */}

              {/* mini-cart */}

              {/* mini-cart */}
              {/* Mobile Menu Button */}
              <div className="mobile-menu-toggle d-xl-none">
                <a href="index.html" className="ltn__utilize-toggle">
                  <svg viewBox="0 0 800 600">
                    <path
                      d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                      id="top"
                    />
                    <path d="M300,320 L540,320" id="middle" />
                    <path
                      d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                      id="bottom"
                      transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ltn__header-middle-area end */}
    </div>
  );
};

export default Navbar;