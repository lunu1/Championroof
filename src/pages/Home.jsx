import React from "react";
import Navbar from "../components/Navbar";
import NavSec from "../components/NavSec";
import "../styles/home.scss";
import Homebg from "../assets/images/homebg.jpg";
import Homebg2 from "../assets/images/background.jpeg";
import { Dot } from "../assets/svgs/Svg";
import AboutUs from "./AboutUs";
import Contactbox from "../components/Contactbox";
const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${Homebg2})` }}>
      <div className="homecontents">
        <div className="headingPoints">
          {/* <h4>Roofing</h4>
          <Dot height="12px" width="12px" /> */}
          <h4>Roofing</h4>
          <Dot height="12px" width="12px" />
          <h4>Gutters</h4>
          <Dot height="12px" width="12px" />
          <h4>Residential Roofing</h4>
        </div>
        <div className="heading">
          <h1>
            Quality Work . <span>Affordable Price</span>
          </h1>
          <p>
            For small reapir to full roof replacements, tell us what work you'd
            like done and we will have an estimate ready for you within 24 hrs .
            we may have to visit your home to get measurement , photos, etc..
          </p>
        </div>
    <Contactbox/>
      </div>
      
    </div>
  );
};

export default Home;
