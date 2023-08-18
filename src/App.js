/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import HomePage from "./homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
