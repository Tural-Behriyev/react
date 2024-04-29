import React from 'react'
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Users from '../Users';
import UserDetails from '../Users/UserDetails';
import NotFound from '../NotFound';
import { Route, Routes } from "react-router";

const WebRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default WebRoutes
