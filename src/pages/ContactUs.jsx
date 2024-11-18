import React from "react";
import "../styles/contactus.scss";
import { Instagram, Twitter, Facebook, LinkedIn } from "../assets/svgs/Svg";
import Contactbox from "../components/Contactbox";

const ContactUs = () => {
  return (
    <>
      <div className="contactus">
        <div className="firstbox">
          <div className="box">
            <h3>Address Info</h3>
            <p>
              Champion Roof Insulation Work LLC, Musaffah - Musaffah 34 - Abu
              Dhabi - United Arab Emirates
            </p>
            {/* <p>lorem lorem loooorem</p>
        <p>lorem lorem loooorem</p> */}
          </div>
          <div className="box">
            <h3>Phone and Email</h3>
            <p>+971 2 559 4798</p>
            <p>+971 526336867</p>
            <p>info@championroof.ae</p>
            {/* <p>lorem lorem loooorem</p> */}
          </div>
          <div className="box">
            <h3>Bussiness Hours</h3>

            <p> 7 am–7 pm</p>
            {/* <p>lorem lorem loooorem</p> */}
            {/* <p>lorem lorem loooorem</p> */}
          </div>
          <div className="box">
            <h3>Follow us</h3>
            <div className="socialmedia">
              <a href="#">
                <div className="circle">
                  <Instagram height="18px" width="18px" />
                </div>
              </a>
              <a href="#">
                <div className="circle">
                  <LinkedIn height="18px" width="18px" />
                </div>
              </a>
              <a href="#">
                <div className="circle">
                  <Twitter height="18px" width="18px" />
                </div>
              </a>
              <a href="#">
                <div className="circle">
                  <Facebook height="18px" width="18px" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <Contactbox />
      </div>
      <div style={{ width: "100vw" }}>
        <iframe
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
         src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Champion%20Roof%20Insulation%20Work%20LLC,%20Musaffah%20-%20Musaffah%2034%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
    </>
  );
};

export default ContactUs;
