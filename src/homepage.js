/** @format */

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="body-wrapper">
        <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile--- ltn__header-logo-and-mobile-menu--- ltn__header-transparent gradient-color-4---">
          {/* ltn__header-top-area start */}
          <div className="ltn__header-top-area border-bottom top-area-color-white---">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                          <i className="icon-mail" />{" "}
                          achievehealthcare@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                          <i className="icon-placeholder" /> Shantinagar,
                          Baneshwor
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="top-bar-right text-end">
                    <div className="ltn__top-bar-menu">
                      <ul>
                        <li>
                          {/* ltn__social-media */}
                          {/* <div className="ltn__social-media">
                            <ul>
                              <li>
                                <a
                                  href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"
                                  title="Facebook"
                                >
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"
                                  title="Twitter"
                                >
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"
                                  title="Instagram"
                                >
                                  <i className="fab fa-instagram" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"
                                  title="Dribbble"
                                >
                                  <i className="fab fa-dribbble" />
                                </a>
                              </li>
                            </ul>
                          </div> */}
                        </li>
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
                <div className="col">
                  <div className="site-logo-wrap">
                    <div className="site-logo">
                      <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                        <img
                          src="assets/img/logo.png"
                          alt="Logo"
                          className="w-20"
                          style={{ width: "100px" }}
                        />
                      </a>
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
                <div className="col header-menu-column menu-color-white---">
                  <div className="header-menu d-none d-xl-block">
                    <nav>
                      <div className="ltn__main-menu">
                        <ul>
                          <li className="menu-icon">
                            <a href="index.html">Home</a>
                            <ul className="sub-menu menu-pages-img-show ltn__sub-menu-col-2---">
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  Home Style 01
                                </a>
                                <img
                                  src="img/home-demos/home-1.jpg"
                                  alt="product-details.html"
                                />
                              </li>
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  Home Style 02
                                </a>
                                <img
                                  src="img/home-demos/home-2.jpg"
                                  alt="product-details.html"
                                />
                              </li>
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  Home Style 03
                                </a>
                                <img
                                  src="img/home-demos/home-3.jpg"
                                  alt="product-details.html"
                                />
                              </li>
                            </ul>
                          </li>
                          <li className="menu-icon">
                            <Link to="/about-us">About</Link>
                            {/* <ul>
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  About
                                </a>
                              </li>
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  Services
                                </a>
                              </li>
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  Service Details
                                </a>
                              </li>
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  Gallery
                                </a>
                              </li>
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  Gallery - 02
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-details.html">
                                  Gallery Details
                                </a>
                              </li>
                              <li>
                                <a href="team.html">Team</a>
                              </li>
                              <li>
                                <a href="team-details.html">Team Details</a>
                              </li>
                              <li>
                                <a href="faq.html">FAQ</a>
                              </li>
                              <li>
                                <a href="locations.html">
                                  Google Map Locations
                                </a>
                              </li>
                            </ul> */}
                          </li>
                          <li className="menu-icon">
                            <a href="index.html">Shop</a>
                            <ul>
                              <li>
                                <a href="index.html">Shop</a>
                              </li>
                              <li>
                                <a href="shop-grid.html">Shop Grid</a>
                              </li>
                              <li>
                                <a href="shop-left-sidebar.html">
                                  Shop Left sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html">
                                  Shop right sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html">
                                  Shop details{" "}
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  Other Pages{" "}
                                  <span className="float-right">&gt;&gt;</span>
                                </a>
                                <ul>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Wishlist
                                    </a>
                                  </li>
                                  <li>
                                    <a href="checkout.html">Checkout</a>
                                  </li>
                                  <li>
                                    <a href="order-tracking.html">
                                      Order Tracking
                                    </a>
                                  </li>
                                  <li>
                                    <a href="account.html">My Account</a>
                                  </li>
                                  <li>
                                    <a href="login.html">Sign in</a>
                                  </li>
                                  <li>
                                    <a href="register.html">Register</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-icon">
                            <a href="index.html">News</a>
                            <ul>
                              <li>
                                <a href="blog.html">News</a>
                              </li>
                              <li>
                                <a href="blog-grid.html">News Grid</a>
                              </li>
                              <li>
                                <a href="blog-left-sidebar.html">
                                  News Left sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-right-sidebar.html">
                                  News Right sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-details.html">News details</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-icon">
                            <a href="index.html">Pages</a>
                            <ul className="mega-menu">
                              <li>
                                <a href="index.html">Inner Pages</a>
                                <ul>
                                  <li>
                                    <a href="portfolio.html">Gallery</a>
                                  </li>
                                  <li>
                                    <a href="portfolio-2.html">Gallery - 02</a>
                                  </li>
                                  <li>
                                    <a href="portfolio-details.html">
                                      Gallery Details
                                    </a>
                                  </li>
                                  <li>
                                    <a href="team.html">Team</a>
                                  </li>
                                  <li>
                                    <a href="team-details.html">Team Details</a>
                                  </li>
                                  <li>
                                    <a href="faq.html">FAQ</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="index.html">Inner Pages</a>
                                <ul>
                                  <li>
                                    <a href="history.html">History</a>
                                  </li>
                                  <li>
                                    <a href="contact.html">Appointment</a>
                                  </li>
                                  <li>
                                    <a href="locations.html">
                                      Google Map Locations
                                    </a>
                                  </li>
                                  <li>
                                    <a href="404.html">404</a>
                                  </li>
                                  <li>
                                    <a href="contact.html">Contact</a>
                                  </li>
                                  <li>
                                    <a href="coming-soon.html">Coming Soon</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="index.html">Shop Pages</a>
                                <ul>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Shop
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-left-sidebar.html">
                                      Shop Left sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-right-sidebar.html">
                                      Shop right sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-grid.html">Shop Grid</a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Shop details{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                      Cart
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                  <img
                                    src="img/banner/menu-banner-1.png"
                                    alt="product-details.html"
                                  />
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
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
        </header>

        {/* PRODUCT AREA END */}
      </div>
    </>
  );
};

export default HomePage;
