import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img2 from "./assets/star2.svg";
import calvin from "./assets/calvin.svg";
import gucci from "./assets/gucci-logo-1 1.svg";
import prada from "./assets/prada-logo-1 1.svg";
import versace from "./assets/veerc.svg";
import zara from "./assets/zara-logo-1 1.svg";
import "./HeaderHome.css";

const HeaderHomePage = () => {
  return (
    <div className="wrapper">
      <div className="main-block-bg">
        <div>
          <h1 className="head">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="main-title">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link to={"/products"}>
            <button className="btn">Shop Now</button>
          </Link>
          <div>
            <ul className="brand">
              <li className="brand-text"></li>
              <li className="brand-text"></li>
              <li className="brand-text"></li>
            </ul>
          </div>
        </div>
        <div>
          <img id="star_2" className="star" src={img2} alt="" />
        </div>
      </div>
      <div className="main-brands">
        <img className="logo_brands" src={versace} alt="" />
        <img className="logo_brands" src={zara} alt="" />
        <img className="logo_brands" src={gucci} alt="" />
        <img className="logo_brands" src={prada} alt="" />
        <img className="logo_brands" src={calvin} alt="" />
      </div>
    </div>
  );
};

export default HeaderHomePage;
