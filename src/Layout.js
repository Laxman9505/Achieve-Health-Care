/** @format */

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="body-wrapper">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
