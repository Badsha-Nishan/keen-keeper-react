import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="bg-base-200">
      <Navbar />
      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center py-10">
          <span className="loading loading-spinner text-success"></span>
          <p>Loading Data....</p>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
