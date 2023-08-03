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
                          <a href="#home" className="section-link">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#features" className="section-link">
                            Products
                          </a>
                        </li>

                        <li>
                          <a href="#ingredient" className="section-link">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#pricing" className="section-link">
                            Members
                          </a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="shop.html">Contact Us</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#news" className="section-link">
                            Vacancy
                          </a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#news" className="section-link">
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-sm-block">
                      <ul>
                        <li className="header-shop-cart">
                          <a href="#" className="cart-count">
                            <i className="flaticon-shopping-cart" />
                            <span className="mini-cart-count">2</span>
                          </a>
                          <div className="header-mini-cart">
                            <ul className="woocommerce-mini-cart cart_list product_list_widget list-wrap">
                              <li className="woocommerce-mini-cart-item d-flex align-items-center">
                                <a
                                  href="#"
                                  className="remove remove_from_cart_button"
                                >
                                  ×
                                </a>
                                <div className="mini-cart-img">
                                  <img
                                    src="assets/img/products/cart_p01.jpg"
                                    alt="Product"
                                  />
                                </div>
                                <div className="mini-cart-content">
                                  <h4 className="product-title">
                                    <a href="shop-details.html">
                                      Antiaging and Longevity
                                    </a>
                                  </h4>
                                  <div className="mini-cart-price">
                                    1 ×
                                    <span className="woocommerce-Price-amount amount">
                                      $49
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="woocommerce-mini-cart-item d-flex align-items-center">
                                <a
                                  href="#"
                                  className="remove remove_from_cart_button"
                                >
                                  ×
                                </a>
                                <div className="mini-cart-img">
                                  <img
                                    src="assets/img/products/cart_p02.jpg"
                                    alt="Product"
                                  />
                                </div>
                                <div className="mini-cart-content">
                                  <h4 className="product-title">
                                    <a href="shop-details.html">
                                      Branched Chain Amino Acids
                                    </a>
                                  </h4>
                                  <div className="mini-cart-price">
                                    2 ×
                                    <span className="woocommerce-Price-amount amount">
                                      $69
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <p className="woocommerce-mini-cart__total">
                              <strong>Subtotal:</strong>
                              <span className="woocommerce-Price-amount">
                                $149
                              </span>
                            </p>
                            <p className="checkout-link">
                              <a
                                href="shop-details.html"
                                className="button wc-forward"
                              >
                                View cart
                              </a>
                              <a
                                href="shop-details.html"
                                className="button checkout wc-forward"
                              >
                                Checkout
                              </a>
                            </p>
                          </div>
                        </li>
                        <li className="header-search">
                          <a href="#">
                            <i className="flaticon-search" />
                          </a>
                        </li>
                        <li className="offCanvas-btn d-none d-xl-block">
                          <a href="#" className="navSidebar-button">
                            <i className="flaticon-layout" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn">
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <a href="index.html">
                        <img src="assets/img/logo/logo.png" alt="" />
                      </a>
                    </div>
                    <div className="menu-outer">
                      {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    </div>
                    <div className="social-links">
                      <ul className="clearfix">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
        {/* header-search */}
        <div
          className="search-popup-wrap"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="search-wrap text-center">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="search-form">
                    <form action="#">
                      <input type="text" placeholder="Enter your keyword..." />
                      <button className="search-btn">
                        <i className="flaticon-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-backdrop" />
        {/* header-search-end */}
        {/* offCanvas-start */}
        <div className="offCanvas-wrap">
          <div className="offCanvas-toggle">
            <img src="assets/img/icons/close.png" alt="icon" />
          </div>
          <div className="offCanvas-body">
            <div className="offCanvas-content">
              <h3 className="title">
                Getting all of the <span>Nutrients</span> you need simply cannot
                be done without supplements.
              </h3>
              <p>
                Nam libero tempore, cum soluta nobis eligendi cumque quod
                placeat facere possimus assumenda omnis dolor repellendu sautem
                temporibus officiis
              </p>
            </div>
            <div className="offcanvas-contact">
              <h4 className="number">+1 599 162 4545</h4>
              <h4 className="email">suxnix@gmail.com</h4>
              <p>
                5689 Lotaso Terrace, Culver City, <br /> CA, United States
              </p>
              <ul className="offcanvas-social list-wrap">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="offCanvas-overlay" />
        {/* offCanvas-end */}
      </header>
      {/* header-area-end */}
      {/* main-area */}
      <main className="main-area fix">
        {/* banner-area */}
        <section className="banner-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-8 col-xl-7 col-lg-8 col-md-10">
                <div className="banner-content text-center">
                  <p className="banner-caption">
                    .. Increased Energy With SUXNIX ..
                  </p>
                  <h2 className="title">Mix Protein Provided Way To Growth</h2>
                  <a href="shop.html" className="btn btn-two">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="banner-images text-center">
                  <img
                    src="assets/img/banner/banner_img01.png"
                    alt="img"
                    className="main-img"
                  />
                  <img
                    src="assets/img/banner/banner_round_bg.png"
                    alt="img"
                    className="bg-shape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="banner-shape one">
            <img
              src="assets/img/banner/banner_shape01.png"
              alt="shape"
              className="wow bannerFadeInLeft"
              data-wow-delay=".2s"
              data-wow-duration="2s"
            />
          </div>
          <div className="banner-shape two">
            <img
              src="assets/img/banner/banner_shape02.png"
              alt="shape"
              className="wow bannerFadeInRight"
              data-wow-delay=".2s"
              data-wow-duration="2s"
            />
          </div>
          <div className="banner-shape three">
            <img
              src="assets/img/banner/banner_shape03.png"
              alt="shape"
              className="wow bannerFadeInDown"
              data-wow-delay=".2s"
              data-wow-duration="2s"
            />
          </div>
          <div className="banner-shape four">
            <img
              src="assets/img/banner/banner_shape04.png"
              alt="shape"
              className="wow bannerFadeInDown"
              data-wow-delay=".2s"
              data-wow-duration="2s"
            />
          </div>
        </section>
        {/* banner-area-end */}
        {/* brand-area */}
        <div className="brand-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="brand-title text-center mb-50">
                  <p className="title">Perfect Brand is Featured on</p>
                </div>
              </div>
            </div>
            <div className="row brand-active">
              <div className="col-2">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/img/brand/brand_01.png" alt="brand" />
                  </a>
                </div>
              </div>
              <div className="col-2">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/img/brand/brand_02.png" alt="brand" />
                  </a>
                </div>
              </div>
              <div className="col-2">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/img/brand/brand_03.png" alt="brand" />
                  </a>
                </div>
              </div>
              <div className="col-2">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/img/brand/brand_04.png" alt="brand" />
                  </a>
                </div>
              </div>
              <div className="col-2">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/img/brand/brand_05.png" alt="brand" />
                  </a>
                </div>
              </div>
              <div className="col-2">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/img/brand/brand_06.png" alt="brand" />
                  </a>
                </div>
              </div>
              <div className="col-2">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/img/brand/brand_03.png" alt="brand" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* brand-area-end */}
        {/* features-area */}
        <section
          id="features"
          className="features-area features-bg"
          data-background="assets/img/bg/features_bg.jpg"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-lg-5 order-0 order-lg-2">
                <div
                  className="features-img wow featuresRollOut"
                  data-wow-delay=".3s"
                >
                  <img src="assets/img/others/features_img.png" alt="" />
                </div>
              </div>
              <div className="col-xxl-6 col-lg-7">
                <div className="features-items-wrap">
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-8">
                      <div className="features-item">
                        <div className="features-icon">
                          <i className="flaticon-tape-measure" />
                        </div>
                        <div className="features-content">
                          <h4 className="title">Multi Fruits Flavour</h4>
                          <p>
                            A thing added to something else in order to complete
                            or enhance it.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-8">
                      <div className="features-item">
                        <div className="features-icon">
                          <i className="flaticon-test" />
                        </div>
                        <div className="features-content">
                          <h4 className="title">Flower Formula</h4>
                          <p>
                            A thing added to something else in order to complete
                            or enhance it.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-8">
                      <div className="features-item">
                        <div className="features-icon">
                          <i className="flaticon-weight" />
                        </div>
                        <div className="features-content">
                          <h4 className="title">Fishbone Diagram</h4>
                          <p>
                            A thing added to something else in order to complete
                            or enhance it.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-8">
                      <div className="features-item">
                        <div className="features-icon">
                          <i className="flaticon-abs" />
                        </div>
                        <div className="features-content">
                          <h4 className="title">100% Fat Blasting</h4>
                          <p>
                            A thing added to something else in order to complete
                            or enhance it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* features-area-end */}
        {/* features-product */}
        <section id="paroller" className="features-products">
          <div className="container">
            <div className="features-products-wrap">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <div className="features-products-thumb">
                    <div className="main-img">
                      <img
                        src="assets/img/products/features_product01.png"
                        alt="img"
                      />
                    </div>
                    <img
                      src="assets/img/products/features_product_shape01.png"
                      alt="img"
                      className="shape-img"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-10">
                  <div className="features-product-content">
                    <h2 className="title">
                      <a href="shop-details.html">Seriour Mass</a>
                    </h2>
                    <h6 className="features-product-quantity">
                      High-strength, 5000IU
                    </h6>
                    <p>
                      Vitamin D3 supplements are commonly recommended for people
                      at risk for vitamin D deficiency. Low vitamin D levels
                      cause depression, fatigue, and muscle weakness. Over time,
                      vitamin D deficiency can lead to weak bones, rickets in
                      children, and osteoporosis in adults.{" "}
                    </p>
                    <div className="features-product-bottom">
                      <a href="shop-details.html" className="btn">
                        Shop Now
                      </a>
                      <span className="price">
                        $89.99 <span className="old-price">$117.99</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-products-wrap">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <div className="features-products-thumb">
                    <div className="main-img">
                      <img
                        src="assets/img/products/features_product02.png"
                        alt="img"
                      />
                    </div>
                    <img
                      src="assets/img/products/features_product_shape02.png"
                      alt="img"
                      className="shape-img"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-10">
                  <div className="features-product-content">
                    <h2 className="title">
                      <a href="shop-details.html">Protein Whey</a>
                    </h2>
                    <h6 className="features-product-quantity">
                      High-strength, 4000IU
                    </h6>
                    <p>
                      Vitamin D3 supplements are commonly recommended for people
                      at risk for vitamin D deficiency. Low vitamin D levels
                      cause depression, fatigue, and muscle weakness. Over time,
                      vitamin D deficiency can lead to weak bones, rickets in
                      children, and osteoporosis in adults.{" "}
                    </p>
                    <div className="features-product-bottom">
                      <a href="shop-details.html" className="btn">
                        Shop Now
                      </a>
                      <span className="price">
                        $59.99 <span className="old-price">$79.99</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-products-wrap">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <div className="features-products-thumb">
                    <div className="main-img">
                      <img
                        src="assets/img/products/features_product03.png"
                        alt="img"
                      />
                    </div>
                    <img
                      src="assets/img/products/features_product_shape03.png"
                      alt="img"
                      className="shape-img"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-10">
                  <div className="features-product-content">
                    <h2 className="title">
                      <a href="shop-details.html">Max Mass 3xl</a>
                    </h2>
                    <h6 className="features-product-quantity">
                      High-strength, 4000IU
                    </h6>
                    <p>
                      Vitamin D3 supplements are commonly recommended for people
                      at risk for vitamin D deficiency. Low vitamin D levels
                      cause depression, fatigue, and muscle weakness. Over time,
                      vitamin D deficiency can lead to weak bones, rickets in
                      children, and osteoporosis in adults.{" "}
                    </p>
                    <div className="features-product-bottom">
                      <a href="shop-details.html" className="btn">
                        Shop Now
                      </a>
                      <span className="price">
                        $69.99 <span className="old-price">$89.99</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fp-shapes-wrap">
            <div className="fp-shape-one">
              <img
                src="assets/img/others/features_sec_shape01.png"
                alt="shape"
                className="paroller"
                data-paroller-factor="0.25"
                data-paroller-factor-lg="0.20"
                data-paroller-factor-md="0.25"
                data-paroller-factor-sm="0.10"
                data-paroller-type="foreground"
                data-paroller-direction="vertical"
              />
            </div>
            <div className="fp-shape-two">
              <img
                src="assets/img/others/features_sec_shape02.png"
                alt="shape"
                className="paroller"
                data-paroller-factor="-0.25"
                data-paroller-factor-lg="0.20"
                data-paroller-factor-md="0.25"
                data-paroller-factor-sm="0.10"
                data-paroller-type="foreground"
                data-paroller-direction="vertical"
              />
            </div>
            <div className="fp-shape-three">
              <img
                src="assets/img/others/features_sec_shape03.png"
                alt="shape"
                className="paroller"
                data-paroller-factor="0.25"
                data-paroller-factor-lg="0.20"
                data-paroller-factor-md="0.25"
                data-paroller-factor-sm="0.10"
                data-paroller-type="foreground"
                data-paroller-direction="vertical"
              />
            </div>
          </div>
          <div className="fp-circle one" />
          <div className="fp-circle two" />
          <div className="fp-circle three" />
          <div className="fp-circle four" />
          <div className="fp-circle five" />
        </section>
        {/* features-product-end */}
        {/* shop-area */}
        <section className="home-shop-area">
          <div className="container">
            <div className="row home-shop-active">
              <div className="col-xl-3">
                <div className="home-shop-item">
                  <div className="home-shop-thumb">
                    <a href="shop-details.html">
                      <img
                        src="assets/img/products/home_shop_thumb01.png"
                        alt="img"
                      />
                      <span className="discount"> -15%</span>
                    </a>
                    <div className="shop-thumb-shape" />
                  </div>
                  <div className="home-shop-content">
                    <h4 className="title">
                      <a href="shop-details.html">Box Full of Muscles</a>
                    </h4>
                    <span className="home-shop-price">$85.99</span>
                    <div className="home-shop-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="total-rating">(30)</span>
                    </div>
                    <div className="shop-content-bottom">
                      <a href="#" className="cart">
                        <i className="flaticon-shopping-cart-1" />
                      </a>
                      <a href="#" className="btn btn-two">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="home-shop-item">
                  <div className="home-shop-thumb">
                    <a href="shop-details.html">
                      <img
                        src="assets/img/products/home_shop_thumb02.png"
                        alt="img"
                      />
                    </a>
                    <div className="shop-thumb-shape yellow" />
                  </div>
                  <div className="home-shop-content">
                    <h4 className="title">
                      <a href="shop-details.html">Protein Powder 2kg</a>
                    </h4>
                    <span className="home-shop-price">$55.99</span>
                    <div className="home-shop-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="total-rating">(30)</span>
                    </div>
                    <div className="shop-content-bottom">
                      <a href="#" className="cart">
                        <i className="flaticon-shopping-cart-1" />
                      </a>
                      <a href="#" className="btn btn-two">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="home-shop-item">
                  <div className="home-shop-thumb">
                    <a href="shop-details.html">
                      <img
                        src="assets/img/products/home_shop_thumb03.png"
                        alt="img"
                      />
                      <span className="discount"> -15%</span>
                    </a>
                    <div className="shop-thumb-shape purple" />
                  </div>
                  <div className="home-shop-content">
                    <h4 className="title">
                      <a href="shop-details.html">Amino Energy Health 2kg</a>
                    </h4>
                    <span className="home-shop-price">$79.99</span>
                    <div className="home-shop-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="total-rating">(24)</span>
                    </div>
                    <div className="shop-content-bottom">
                      <a href="#" className="cart">
                        <i className="flaticon-shopping-cart-1" />
                      </a>
                      <a href="#" className="btn btn-two">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="home-shop-item">
                  <div className="home-shop-thumb">
                    <a href="shop-details.html">
                      <img
                        src="assets/img/products/home_shop_thumb04.png"
                        alt="img"
                      />
                    </a>
                    <div className="shop-thumb-shape gray" />
                  </div>
                  <div className="home-shop-content">
                    <h4 className="title">
                      <a href="shop-details.html">Antiaging and Longevity</a>
                    </h4>
                    <span className="home-shop-price">$79.99</span>
                    <div className="home-shop-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="total-rating">(24)</span>
                    </div>
                    <div className="shop-content-bottom">
                      <a href="#" className="cart">
                        <i className="flaticon-shopping-cart-1" />
                      </a>
                      <a href="#" className="btn btn-two">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="home-shop-item">
                  <div className="home-shop-thumb">
                    <a href="shop-details.html">
                      <img
                        src="assets/img/products/home_shop_thumb05.png"
                        alt="img"
                      />
                    </a>
                    <div className="shop-thumb-shape blue" />
                  </div>
                  <div className="home-shop-content">
                    <h4 className="title">
                      <a href="shop-details.html">SERIOUR MASS 2kg</a>
                    </h4>
                    <span className="home-shop-price">$39.99</span>
                    <div className="home-shop-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="total-rating">(12)</span>
                    </div>
                    <div className="shop-content-bottom">
                      <a href="#" className="cart">
                        <i className="flaticon-shopping-cart-1" />
                      </a>
                      <a href="#" className="btn btn-two">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* shop-area-end */}
        {/* video-area */}
        <div
          className="video-area video-bg"
          data-background="assets/img/bg/video_bg.jpg"
        >
          <div className="video-bg-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="video-btn">
                  <a
                    href="https://www.youtube.com/watch?v=HQfF5XRVXjU"
                    className="popup-video ripple-white"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="video-shape one">
            <img src="assets/img/others/video_shape01.png" alt="shape" />
          </div>
          <div className="video-shape two">
            <img src="assets/img/others/video_shape02.png" alt="shape" />
          </div>
        </div>
        {/* video-area-end */}
        {/* fact-area */}
        <section className="fact-area">
          <div className="container">
            <div className="fact-items-wrapper">
              <div className="row g-0 justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="fact-item">
                    <div className="chart" data-percent={65}>
                      <span className="percentage">
                        65<small>%</small>
                      </span>
                    </div>
                    <div className="fact-content">
                      <h4 className="title">Active Members</h4>
                      <span>Yes we did it asap software</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="fact-item">
                    <div className="chart" data-percent={90}>
                      <span className="percentage">
                        90<small>%</small>
                      </span>
                    </div>
                    <div className="fact-content">
                      <h4 className="title">Projects Done</h4>
                      <span>Yes we did it asap software</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="fact-item">
                    <div className="chart" data-percent={80}>
                      <span className="percentage">
                        80<small>%</small>
                      </span>
                    </div>
                    <div className="fact-content">
                      <h4 className="title">Get Rewards</h4>
                      <span>Yes we did it asap software</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* fact-area-end */}
        {/* Ingredients-area */}
        <section id="ingredient" className="ingredients-area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-7">
                <div className="ingredients-img">
                  <img src="assets/img/others/ingredients_img.png" alt="img" />
                  <img
                    src="assets/img/others/ingredients_shape.png"
                    alt="img"
                    className="shape"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-9">
                <div className="ingredients-items-wrap">
                  <div className="section-title mb-60">
                    <p className="sub-title">
                      .. Increased Energy With Suxnix ..
                    </p>
                    <h2 className="title">Suxnix Ingredients</h2>
                  </div>
                  <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-md-6 col-sm-8">
                      <div
                        className="ingredients-item wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        <div className="ingredients-thumb">
                          <img
                            src="assets/img/others/ingredients_item01.png"
                            alt="img"
                          />
                        </div>
                        <div className="ingredients-content">
                          <h5 className="title">
                            Helps You Stick To Your Diet
                          </h5>
                          <p>
                            A thing added to something else in order to complete
                            or enhance it.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-8">
                      <div
                        className="ingredients-item wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="ingredients-thumb">
                          <img
                            src="assets/img/others/ingredients_item02.png"
                            alt="img"
                          />
                        </div>
                        <div className="ingredients-content">
                          <h5 className="title">
                            Only 3g Net Carbs In Every Jar
                          </h5>
                          <p>
                            A thing added to something else in order to complete
                            or enhance it.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-8">
                      <div
                        className="ingredients-item wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <div className="ingredients-thumb">
                          <img
                            src="assets/img/others/ingredients_item03.png"
                            alt="img"
                          />
                        </div>
                        <div className="ingredients-content">
                          <h5 className="title">
                            Ingredients To Fuel Your Body
                          </h5>
                          <p>
                            A thing added to something else in order to complete
                            or enhance it.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-8">
                      <div
                        className="ingredients-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="ingredients-thumb">
                          <img
                            src="assets/img/others/ingredients_item04.png"
                            alt="img"
                          />
                        </div>
                        <div className="ingredients-content">
                          <h5 className="title">Clean Ingredients Only</h5>
                          <p>
                            A thing added to something else in order to complete
                            or enhance it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Ingredients-area-end */}
        {/* formula-area */}
        <section
          className="formula-area formula-bg"
          data-background="assets/img/bg/formula_bg.jpg"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-0 order-lg-2">
                <div className="formula-img">
                  <img src="assets/img/others/formula_img.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="formula-content">
                  <div className="section-title white-title mb-50">
                    <p className="sub-title">.. Suxnix Formula ..</p>
                    <h2 className="title">Why We Chose This Formula</h2>
                  </div>
                  <ul className="formula-list list-wrap">
                    <li>
                      Tastes like dessert without added sugars or sugar alcohols
                    </li>
                    <li>No artificial sweeteners, dairy, say or corn fiber</li>
                    <li>10G of collagen protein from grass-fed cows</li>
                    <li>Formulated to reduce blood sugar intact</li>
                    <li>Organic almond Butter, Sunflower Lecithin</li>
                    <li>No energy crashes. Collagen Protein, Stevia</li>
                    <li>10G of collagen protein from grass-fed cows</li>
                  </ul>
                  <a href="contact.html" className="btn btn-two">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* formula-area-end */}
        {/* pricing-area */}
        <section id="pricing" className="pricing-area gray-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title text-center mb-55">
                  <p className="sub-title">.. Suxnix Plans ..</p>
                  <h2 className="title">SUPPLEMENT PACKAGES</h2>
                </div>
              </div>
            </div>
            <div className="pricing-wrap">
              <div className="row align-items-end justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="pricing-item mb-30 regular">
                    <div className="pricing__box text-center">
                      <div className="pricing-hade">
                        <span>1 Bottle Of</span>
                        <h3 className="title">Suxnix</h3>
                        <p>(1 x 250 veggie caps bottle)</p>
                      </div>
                      <div className="pricing-img">
                        <img src="assets/img/others/pricing_01.png" alt="img" />
                      </div>
                      <div className="pricing-price">
                        <h4 className="price">$69</h4>
                        <span>
                          per <br /> bottle
                        </span>
                      </div>
                      <h5 className="total">($69 TOTAL)</h5>
                      <div className="price-savings">
                        <h4 className="save">Save 14%</h4>
                        <span>&nbsp;</span>
                      </div>
                      <div className="pricing-btn mb-15">
                        <a href="contact.html">
                          Buy Now{" "}
                          <span>365 Day Full Money Back Guaranteed</span>
                        </a>
                      </div>
                      <div className="bottom-img">
                        <img
                          src="assets/img/others/pricing_bottom_img.png"
                          alt="card"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="pricing-item mb-30 popular-plan">
                    <div className="pricing-title text-center mb-10">
                      <h4 className="title">★ Most Popular ★</h4>
                    </div>
                    <div className="pricing__box text-center">
                      <div className="pricing-hade">
                        <span>3 Bottle Of</span>
                        <h3 className="title">Suxnix</h3>
                        <p>(3 x 250 veggie caps bottle)</p>
                      </div>
                      <div className="pricing-img">
                        <img src="assets/img/others/pricing_02.png" alt="img" />
                      </div>
                      <div className="pricing-price">
                        <h4 className="price">$59</h4>
                        <span>
                          per <br /> bottle
                        </span>
                      </div>
                      <h5 className="total">($179 TOTAL)</h5>
                      <div className="price-savings">
                        <h4 className="save">Save 25%</h4>
                        <span>+ Free Shipping</span>
                      </div>
                      <div className="pricing-btn mb-15">
                        <a href="contact.html">
                          Buy Now{" "}
                          <span>365 Day Full Money Back Guaranteed</span>
                        </a>
                      </div>
                      <div className="bottom-img">
                        <img
                          src="assets/img/others/pricing_bottom_img.png"
                          alt="card"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="pricing-item mb-30 best-value-plan">
                    <div className="pricing-title text-center mb-10">
                      <h4 className="title">✓ Best Value</h4>
                    </div>
                    <div className="pricing__box text-center">
                      <div className="pricing-hade">
                        <span>6 Bottle Of</span>
                        <h3 className="title">Suxnix</h3>
                        <p>(6 x 250 veggie caps bottle)</p>
                      </div>
                      <div className="pricing-img">
                        <img src="assets/img/others/pricing_03.png" alt="img" />
                      </div>
                      <div className="pricing-price">
                        <h4 className="price">$49</h4>
                        <span>
                          per <br /> bottle
                        </span>
                      </div>
                      <h5 className="total">($299 TOTAL)</h5>
                      <div className="price-savings">
                        <h4 className="save">Save 40%</h4>
                        <span>+ Free Shipping</span>
                      </div>
                      <div className="pricing-btn mb-15">
                        <a href="contact.html">
                          Buy Now{" "}
                          <span>365 Day Full Money Back Guaranteed</span>
                        </a>
                      </div>
                      <div className="bottom-img">
                        <img
                          src="assets/img/others/pricing_bottom_img.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* pricing-area-end */}
        {/* testimonial-area */}
        <section
          className="testimonial-area testimonial-bg"
          data-background="assets/img/bg/testimonial_bg.jpg"
        >
          <div className="testimonial-overlay" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-8 col-xl-9 col-lg-11">
                <div className="testimonial-active">
                  <div className="testimonial-item text-center">
                    <div className="testimonial-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <p>
                      “Becoming more involved in administration within the
                      (MidMichigan) health system over the years, I had been
                      researching options for further education that would
                      assist in this transition and fit my busy schedule
                    </p>
                    <div className="testimonial-avatar-wrap">
                      <div className="testi-avatar-img">
                        <img
                          src="assets/img/others/testi_avatar01.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="testi-avatar-info">
                        <h5 className="name">Janeta Cooper</h5>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item text-center">
                    <div className="testimonial-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <p>
                      “Becoming more involved in administration within the
                      (MidMichigan) health system over the years, I had been
                      researching options for further education that would
                      assist in this transition and fit my busy schedule
                    </p>
                    <div className="testimonial-avatar-wrap">
                      <div className="testi-avatar-img">
                        <img
                          src="assets/img/others/testi_avatar02.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="testi-avatar-info">
                        <h5 className="name">Lempor Kooper</h5>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item text-center">
                    <div className="testimonial-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <p>
                      “Becoming more involved in administration within the
                      (MidMichigan) health system over the years, I had been
                      researching options for further education that would
                      assist in this transition and fit my busy schedule
                    </p>
                    <div className="testimonial-avatar-wrap">
                      <div className="testi-avatar-img">
                        <img
                          src="assets/img/others/testi_avatar03.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="testi-avatar-info">
                        <h5 className="name">Zonalos Neko</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial-area-end */}
        {/* blog-post-area */}
        <section id="news" className="blog-post-area">
          <div className="container">
            <div className="blog-inner-wrapper">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                  <div className="blog-posts-wrapper">
                    <div className="section-title mb-50">
                      <p className="sub-title">.. Suxnix News ..</p>
                      <h2 className="title">Latest News</h2>
                    </div>
                    <div className="blog-post-item">
                      <a href="blog-details.html">
                        <div
                          className="blog-post-thumb"
                          data-background="assets/img/blog/post_thumb01.jpg"
                        />
                      </a>
                      <div className="blog-post-content">
                        <div className="content-top">
                          <div className="tags">
                            <a href="#">Tips &amp; Tricks</a>
                          </div>
                          <span className="date">
                            <i className="far fa-clock" /> 12 Days ago
                          </span>
                        </div>
                        <h3 className="title">
                          <a href="blog-details.html">
                            hOW MUCH DO EAT YOU REALLY NEED...
                          </a>
                        </h3>
                        <div className="content-bottom">
                          <ul className="list-wrap">
                            <li className="user">
                              Post By - <a href="#">Admin</a>
                            </li>
                            <li className="comments">
                              <i className="far fa-envelope" /> 24
                            </li>
                            <li className="viewers">
                              <i className="far fa-eye" /> 77k
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="blog-post-item">
                      <a href="blog-details.html">
                        <div
                          className="blog-post-thumb"
                          data-background="assets/img/blog/post_thumb02.jpg"
                        />
                      </a>
                      <div className="blog-post-content">
                        <div className="content-top">
                          <div className="tags">
                            <a href="#">Tips &amp; Tricks</a>
                          </div>
                          <span className="date">
                            <i className="far fa-clock" /> 12 Days ago
                          </span>
                        </div>
                        <h3 className="title">
                          <a href="blog-details.html">
                            Supplementing your diet tOWARDS ...
                          </a>
                        </h3>
                        <div className="content-bottom">
                          <ul className="list-wrap">
                            <li className="user">
                              Post By - <a href="#">Admin</a>
                            </li>
                            <li className="comments">
                              <i className="far fa-envelope" /> 29
                            </li>
                            <li className="viewers">
                              <i className="far fa-eye" /> 87k
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="blog-post-item">
                      <a href="blog-details.html">
                        <div
                          className="blog-post-thumb"
                          data-background="assets/img/blog/post_thumb03.jpg"
                        />
                      </a>
                      <div className="blog-post-content">
                        <div className="content-top">
                          <div className="tags">
                            <a href="#">Tips &amp; Tricks</a>
                          </div>
                          <span className="date">
                            <i className="far fa-clock" /> 12 Days ago
                          </span>
                        </div>
                        <h3 className="title">
                          <a href="blog-details.html">
                            Dietary Supplement report market...
                          </a>
                        </h3>
                        <div className="content-bottom">
                          <ul className="list-wrap">
                            <li className="user">
                              Post By - <a href="#">Admin</a>
                            </li>
                            <li className="comments">
                              <i className="far fa-envelope" /> 29
                            </li>
                            <li className="viewers">
                              <i className="far fa-eye" /> 87k
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-10">
                  <div className="faq-wrapper">
                    <div className="section-title mb-50">
                      <p className="sub-title">.. Ask Question ..</p>
                      <h2 className="title">Get Every Answers</h2>
                    </div>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item active-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <span className="count">01.</span> Suxnix
                            ingredients provides a searchable ?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are many variations of passages of lorem ipsum
                            that available but the majority have alteration in
                            some form by injected humour. There are many
                            variations of passages.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <span className="count">02.</span> How to edit
                            Suxnix themes ?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are many variations of passages of lorem ipsum
                            that available but the majority have alteration in
                            some form by injected humour. There are many
                            variations of passages.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <span className="count">03.</span> Suxnix app is a
                            powerful application ?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are many variations of passages of lorem ipsum
                            that available but the majority have alteration in
                            some form by injected humour. There are many
                            variations of passages.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <span className="count">04.</span> Latest version
                            thorough Suxnix powerful ?
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are many variations of passages of lorem ipsum
                            that available but the majority have alteration in
                            some form by injected humour. There are many
                            variations of passages.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            <span className="count">05.</span> How to Track My
                            Order ?
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are many variations of passages of lorem ipsum
                            that available but the majority have alteration in
                            some form by injected humour. There are many
                            variations of passages.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-bg-shape one" />
          <div className="blog-bg-shape two" />
        </section>
        {/* blog-post-area-end */}
      </main>
      {/* main-area-end */}
      {/* Footer-area */}
      <footer className="footer-area">
        <div className="footer-instagram">
          <div className="container">
            <div className="row g-0 instagram-active">
              <div className="col-2">
                <div className="footer-insta-item">
                  <a
                    href="assets/img/others/instagram_post01.jpg"
                    className="popup-image"
                  >
                    <img
                      src="assets/img/others/instagram_post01.jpg"
                      alt="img"
                    />
                  </a>
                </div>
              </div>
              <div className="col-2">
                <div className="footer-insta-item">
                  <a
                    href="assets/img/others/instagram_post02.jpg"
                    className="popup-image"
                  >
                    <img
                      src="assets/img/others/instagram_post02.jpg"
                      alt="img"
                    />
                  </a>
                </div>
              </div>
              <div className="col-2">
                <div className="footer-insta-item">
                  <a
                    href="assets/img/others/instagram_post03.jpg"
                    className="popup-image"
                  >
                    <img
                      src="assets/img/others/instagram_post03.jpg"
                      alt="img"
                    />
                  </a>
                </div>
              </div>
              <div className="col-2">
                <div className="footer-insta-item">
                  <a
                    href="assets/img/others/instagram_post04.jpg"
                    className="popup-image"
                  >
                    <img
                      src="assets/img/others/instagram_post04.jpg"
                      alt="img"
                    />
                  </a>
                </div>
              </div>
              <div className="col-2">
                <div className="footer-insta-item">
                  <a
                    href="assets/img/others/instagram_post05.jpg"
                    className="popup-image"
                  >
                    <img
                      src="assets/img/others/instagram_post05.jpg"
                      alt="img"
                    />
                  </a>
                </div>
              </div>
              <div className="col-2">
                <div className="footer-insta-item">
                  <a
                    href="assets/img/others/instagram_post06.jpg"
                    className="popup-image"
                  >
                    <img
                      src="assets/img/others/instagram_post06.jpg"
                      alt="img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top-wrap">
          <div className="container">
            <div className="footer-widgets-wrap">
              <div className="row">
                <div className="col-lg-4 col-md-7">
                  <div className="footer-widget">
                    <div className="footer-about">
                      <div className="footer-logo logo">
                        <a href="index.html">
                          <img
                            src="assets/img/logo/white_logo.png"
                            alt="Logo"
                          />
                        </a>
                      </div>
                      <div className="footer-text">
                        <p>
                          Making beauty especially relating complot especial
                          common questions tend to recur through posts or
                          queries standards vary orem donor command tei.
                        </p>
                      </div>
                      <div className="footer-social">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">About Us</h4>
                    <ul className="list-wrap">
                      <li>
                        <a href="#">About Company</a>
                      </li>
                      <li>
                        <a href="#">Affiliate Program</a>
                      </li>
                      <li>
                        <a href="#">Customer Spotlight</a>
                      </li>
                      <li>
                        <a href="#">Reseller Program</a>
                      </li>
                      <li>
                        <a href="shop.html">Our Shop</a>
                      </li>
                      <li>
                        <a href="#">Price &amp; Plans</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Support</h4>
                    <ul className="list-wrap">
                      <li>
                        <a href="#">Knowledge Base</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="#">Developer API</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Team</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5">
                  <div className="footer-widget">
                    <h4 className="fw-title">CONTACT US</h4>
                    <div className="footer-contact-wrap">
                      <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                      <ul className="list-wrap">
                        <li className="phone">
                          <i className="fas fa-phone" /> +1 31-6555-0116
                        </li>
                        <li className="mail">
                          <i className="fas fa-envelope" /> Suxnix@example.com
                        </li>
                        <li className="website">
                          <i className="fas fa-globe" /> www.suxnixdomain.com
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-shape one">
            <img
              src="assets/img/others/footer_shape01.png"
              alt="img"
              className="wow fadeInLeft"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            />
          </div>
          <div className="footer-shape two">
            <img
              src="assets/img/others/footer_shape02.png"
              alt="img"
              className="wow fadeInRight"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            />
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="copyright-text">
                  <p>Copyright © 2022 Suxnix All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="payment-card text-center text-md-end">
                  <img src="assets/img/others/card_img.png" alt="card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
