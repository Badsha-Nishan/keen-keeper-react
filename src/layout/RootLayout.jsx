import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <div className="bg-base-200">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
