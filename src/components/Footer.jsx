import React from "react";
import "../styles/footer.scss";
import { Link } from "react-router-dom";

import { Instagram, Twitter, Facebook, LinkedIn } from "../assets/svgs/Svg";

const Footer = () => {
  return (
    <>
      <div className="footerhome">
        <div className="footer">
          <div className="section">
            <h2>About us</h2>
            <p>
            Champion roof insulation works llc is one of the contractors specializing in
              waterproofing, industrial coating, and allied services in U.A.E.
              Established in 2021, we have emerged as a key player in the
              industry within a short span of time.
            </p>
          </div>

          <div className="section">
            <h2>Quick Links</h2>

            <Link to="/">HOME</Link>
             <Link to="/about">ABOUT US</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/workflow">WORKFLOW</Link>
             <Link to="/contact">CONTACT US</Link>
          </div>
          <div className="section">
            <h2>Contact Us</h2>
            <p>Contact No. : +971 526336867</p>
            <p>info@championroof.ae</p>
            <div className="socialmedia">
              <a href="#">
                <div className="circle">
                  <Instagram />
                </div>
              </a>
              <a href="#">
                <div className="circle">
                  <LinkedIn />
                </div>
              </a>
              <a href="#">
                <div className="circle">
                  <Twitter />
                </div>
              </a>
              <a href="#">
                <div className="circle">
                  <Facebook />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="footerbottom">
          <p>
            &copy; {new Date().getFullYear()} Champion Roof Insulation. All
            rights reserved.
          </p>
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service    <p>Developed by Digtel</p></a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
