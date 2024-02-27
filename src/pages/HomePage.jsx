import React from "react";
import HeaderHomePage from "../components/homaPage/HeaderHomePage";
import NewArrivals from "../components/homaPage/NewArrivals";
import TopSelling from "../components/homaPage/TopSelling";
import BrowseDress from "../components/homaPage/BrowseDress";

const HomePage = () => {
  return (
    <div>
      <HeaderHomePage />
      <NewArrivals />
      <TopSelling />
      <BrowseDress />
    </div>
  );
};

export default HomePage;
