import React from "react";
import Banner from "../../components/banner/Banner";
import AllFriends from "../../components/friends/AllFriends";
import DashboardStats from "./DashboardStats";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <DashboardStats />
      <AllFriends />
    </div>
  );
};

export default Homepage;
