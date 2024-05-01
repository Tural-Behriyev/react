import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "../Navbar";
import Pricing from "../../Pages/Pricing";
import About from "../../Pages/About";
import Features from "../../Pages/Features";
import NotFound from "../../Pages/NotFound";
import Home from "../../Pages/Home";


const WebRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default WebRoutes;
