/** @format */

import { MenuFoldOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { redirectToMaps } from "./mapRedirect";

const Navbar2 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* HEADER AREA START (header-5) */}
      <header className="shadow-sm">
        {/* ltn__header-top-area start */}
        <div className="ltn__header-top-area border-bottom top-area-color-white---">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <a href="mailto:achievehealthcare@gmail.com">
                        <i className="icon-mail" /> achievehealthcare@gmail.com
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        redirectToMaps();
                      }}
                    >
                      <Link to={"/contact-us"}>
                        <i className="icon-placeholder" /> Shantinagar,
                        Baneshwor
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="top-bar-right text-end">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        {/* ltn__language-menu */}
                        <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu"></div>
                      </li>
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
            <div className="row w-100">
              <div className="col">
                <div className="site-logo-wrap">
                  <div className="site-logo d-flex justify-content-between w-100">
                    <Link to={"/"}>
                      <img
                        src="assets/img/logo.png"
                        alt="Logo"
                        className="w-20"
                        style={{ width: "80px" }}
                      />
                    </Link>
                    <Button
                      type="primary"
                      onClick={() => {
                        setIsDrawerOpen(true);
                      }}
                      className="d-md-none "
                      style={{
                        color: "white",
                        marginLeft: "200px",
                        padding: "20px",
                        backgroundColor: "#50AFA7",
                      }}
                      icon={<MenuFoldOutlined />}
                    ></Button>
                  </div>
                </div>
              </div>
              <div className="col header-menu-column menu-color-white---">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        <li className="menu-icon">
                          <Link to={"/"}>Home</Link>
                        </li>

                        <li className="menu-icon w-30">
                          <Link to={"/all-products"}>Products</Link>
                          <ul>
                            <li>
                              <a>
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
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/products?type=surgical-meshes"}>
                                    Surgical Meshes
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={
                                      "products?type=surgical-stapling-products"
                                    }
                                  >
                                    Surgical Stapling Products
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"products?type=Urology-products"}>
                                    Urology Products
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={
                                      "/products?type=laparoscopic-instruments"
                                    }
                                  >
                                    Laparoscopic Instruments
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={"/products?type=orthopedic-implants"}
                                  >
                                    Orthopedic Implants
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={
                                      "/products?type=electrosurgery-instruments"
                                    }
                                  >
                                    Electrosurgery Instruments
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={
                                      "/products?type=surgical-suction-and-drainage"
                                    }
                                  >
                                    Surgical Suction and Drainage
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={"/products?type=compression-stockings"}
                                  >
                                    Compression Stockings
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a>
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
                                  <Link
                                    to={"/products?type=hospital-furnitures"}
                                  >
                                    Hospital Furnitures
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={
                                      "/products?type=operating-room-equipment"
                                    }
                                  >
                                    Operating Room Equipment
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to={"/products?type=diagnostic-equipments"}>
                                Diagnostic Equipments
                              </Link>
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
            </div>
          </div>
        </div>

        {/* ltn__header-middle-area end */}
      </header>
      {/* HEADER AREA END */}
      {/* Utilize Cart Menu Start */}

      {/* Utilize Cart Menu End */}
      {/* Utilize Mobile Menu Start */}
      <div
        id="ltn__utilize-mobile-menu"
        className="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link to={"/"}>
                <img
                  src="assets/img/logo.png"
                  alt="Logo"
                  className="w-20"
                  style={{ width: "80px" }}
                />
              </Link>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>

          <div className="ltn__utilize-menu">
            <ul>
              <li className="menu-icon">
                <Link to={"/"}>Home</Link>
              </li>

              <li className="menu-icon w-30">
                <Link to={"/all-products"}>Products</Link>
                <ul>
                  <li>
                    <a>
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
                        </Link>
                      </li>
                      <li>
                        <Link to={"/products?type=surgical-meshes"}>
                          Surgical Meshes
                        </Link>
                      </li>
                      <li>
                        <Link to={"products?type=surgical-stapling-products"}>
                          Surgical Stapling Products
                        </Link>
                      </li>
                      <li>
                        <Link to={"products?type=Urology-products"}>
                          Urology Products
                        </Link>
                      </li>
                      <li>
                        <Link to={"/products?type=laparoscopic-instruments"}>
                          Laparoscopic Instruments
                        </Link>
                      </li>
                      <li>
                        <Link to={"/products?type=orthopedic-implants"}>
                          Orthopedic Implants
                        </Link>
                      </li>
                      <li>
                        <Link to={"/products?type=electrosurgery-instruments"}>
                          Electrosurgery Instruments
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/products?type=surgical-suction-and-drainage"}
                        >
                          Surgical Suction and Drainage
                        </Link>
                      </li>
                      <li>
                        <Link to={"/products?type=compression-stockings"}>
                          Compression Stockings
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
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
                        <Link to={"/products?type=hospital-furnitures"}>
                          Hospital Furnitures
                        </Link>
                      </li>
                      <li>
                        <Link to={"/products?type=operating-room-equipment"}>
                          Operating Room Equipment
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"/products?type=diagnostic-equipments"}>
                      Diagnostic Equipments
                    </Link>
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
                <Link to="/after-sales-services">After Sales Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Drawer
        width={520}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
        open={isDrawerOpen}
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link to={"/"}>
                <img
                  src="assets/img/logo.png"
                  alt="Logo"
                  className="w-20"
                  style={{ width: "80px" }}
                />
              </Link>
            </div>
          </div>

          <div className="ltn__utilize-menu">
            <ul>
              <li className="menu-icon">
                <Link to={"/"}>Home</Link>
              </li>

              <li className="menu-icon w-30">
                <Link to={"/all-products"}>Products</Link>
                <ul>
                  <li>
                    <a>
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
                        </Link>
                      </li>
                      <li>
                        <Link to={"/products?type=surgical-meshes"}>
                          Surgical Meshes
                        </Link>
                      </li>
                      <li>
                        <Link to={"products?type=surgical-stapling-products"}>
                          Surgical Stapling Products
                        </Link>
                      </li>
                      <li>
                        <Link to={"products?type=Urology-products"}>
                          Urology Products
                        </Link>
                      </li>
                      <li>
                        <Link to={"/products?type=laparoscopic-instruments"}>
                          Laparoscopic Instruments
                        </Link>
                      </li>
                      <li>
                        <Link to={"/products?type=orthopedic-implants"}>
                          Orthopedic Implants
                        </Link>
                      </li>
                      <li>
                        <Link to={"/products?type=electrosurgery-instruments"}>
                          Electrosurgery Instruments
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/products?type=surgical-suction-and-drainage"}
                        >
                          Surgical Suction and Drainage
                        </Link>
                      </li>
                      <li>
                        <Link to={"/products?type=compression-stockings"}>
                          Compression Stockings
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
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
                        <Link to={"/products?type=hospital-furnitures"}>
                          Hospital Furnitures
                        </Link>
                      </li>
                      <li>
                        <Link to={"/products?type=operating-room-equipment"}>
                          Operating Room Equipment
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"/products?type=diagnostic-equipments"}>
                      Diagnostic Equipments
                    </Link>
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
                <Link to="/after-sales-services">After Sales Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar2;
