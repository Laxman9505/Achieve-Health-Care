/** @format */

import React from "react";

const HomePage = () => {
  return (
    <>
      {/* Pre-loader-start */}
      <div id="preloader">
        <div className="tg-cube-grid">
          <div className="tg-cube tg-cube1" />
          <div className="tg-cube tg-cube2" />
          <div className="tg-cube tg-cube3" />
          <div className="tg-cube tg-cube4" />
          <div className="tg-cube tg-cube5" />
          <div className="tg-cube tg-cube6" />
          <div className="tg-cube tg-cube7" />
          <div className="tg-cube tg-cube8" />
          <div className="tg-cube tg-cube9" />
        </div>
      </div>
      {/* Pre-loader-end */}
      {/* Scroll-top */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up" />
      </button>
      {/* Scroll-top-end*/}
      {/* header-area */}
      <header id="home">
        <div id="header-top-fixed" />
        <div id="sticky-header" className="menu-area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler">
                  <i className="flaticon-layout" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <a href="index.html">
                        <img
                          src="assets/img/logo.png"
                          alt="Logo"
                          className="h-100"
                        />
                      </a>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-xl-flex">
                      <ul className="navigation">
                        <li className="active menu-item-has-children">
                          <a href="index.html" className="section-link">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="index.html" className="section-link">
                            Products
                          </a>
                        </li>

                        <li>
                          <a href="index.html" className="section-link">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="index.html" className="section-link">
                            Members
                          </a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="index.html">Contact Us</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="index.html" className="section-link">
                            Vacancy
                          </a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="index.html" className="section-link">
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HomePage;
