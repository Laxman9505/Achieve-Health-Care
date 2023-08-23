/** @format */

import React from "react";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";

const Layout = ({ children }) => {
  // useEffect(() => {
  //   window.location.reload();
  // }, [window.location.pathname]);
  return (
    <div className="body-wrapper">
      {/* Navbar */}
      <Navbar2 />

      {/* Main Content */}
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
