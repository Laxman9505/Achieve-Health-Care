/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import AllProducts from "./AllProducts";
import "./App.css";
import ContactUs from "./ContactUs";
import Products from "./Products";
import HomePage from "./homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
