import React, { useEffect } from "react";
import AboutImage from "../assets/images/aboutus.jpeg";
import "../styles/aboutus.scss";
import WhyUs from "../components/WhyUs";

const AboutUs = () => {

 

  useEffect( () => {
    window.scrollTo(0, 0);
  }, []) ;

  return (
    <div className="parent">
      <div className="about">
        <div className="AboutPhoto">
          <img src={AboutImage} />
        </div>
        <div className="AboutText">
          <h1>Who we are</h1>
          <h4>
          Champion roof insulation works llc (an ISO Certified Company) aim is to be the
            best in its field of waterproofing through the strongest commitment
            to quality and client/customer satisfaction.
          </h4>
          <p>
            We offer a wide variety of waterproofing & Insulation services. Our
            extensive experience in managing resources, process and adherence to
            quality, help our clients focus on core business strategies while
            reducing operating costs. CHAMPION ROOF INSULATION has earned an
            industry reputation of delivering high quality service and customer
            satisfaction. CHAMPION ROOF INSULATION offers a full array of
            services that support business strategies and facilitate improvement
            for compelling business needs.
          </p>
          <p>
            Hoping that you will qualify our firm as a prospective bidder for
            the execution of Water Proofing & Insulation Systems, we look
            forward to serve you.
          </p>
          <button onClick={() => navigate("/AboutDetails")}>Read More</button>
        </div>

      </div>
     <WhyUs/>                       
    </div>
  );
};

export default AboutUs;
