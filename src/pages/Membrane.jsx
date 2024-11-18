import React, { useEffect, useState } from "react";
import "../styles/servicewrapper.scss";
import membrane1 from "../assets/images/membrane1.jpeg"; // Direct import for the image
import membrane2 from "../assets/images/membrane2.jpeg";
import membrane3 from "../assets/images/membrane3.jpeg";
import membrane4 from "../assets/images/membrane4.jpeg";


const Membrane = () => {
  const [imageLoaded, setImageLoaded] = useState(false); // State to manage loading

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="solutionsDetails">
      <div
        className="imageonTop"
        style={{ position: "relative", height: "60vh", width: "100vw" }}
      >
        {!imageLoaded && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              backgroundColor: "#f0f0f0", // Placeholder background color
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <div>Loading...</div> {/* You can replace this with a spinner */}
          </div>
        )}

        <img
          src={membrane4}
          alt="GRP Lining"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            display: imageLoaded ? "block" : "none", // Hide image until loaded
            filter: "brightness(50%)",
            zIndex: 0,
          }}
          onLoad={() => setImageLoaded(true)}
        />

        <div className="centered-text" style={{ zIndex: 2 }}>
        Membrane Waterproofing
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={membrane1} alt="jj" />
          </div>
          <div className="text">
            <h2>Waterproofing of membranes is an advanced form of protection for your building.</h2>
            <p>
            Waterproofing of membranes is an advanced form of protection for your building.
            At Champion Roof Insulation, our Membrane Waterproofing System sets the pace by offering nothing but perfection in water leak protection. This solution involves the laying of high-quality membranes to form a staunch, impervious barrier that prevents water from leaking into your structure. Be it roofs, basements, or structural foundations, our membrane system has assuredly provided consistently dependable protection for your building from dampness and the risks of water damages.
            </p>
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="text">
            <h2>Advanced Technology for Maximum Durability</h2>
            <p>
            Our waterproofing experts use advanced technologies and quality materials to ensure that the membrane is strong enough to withstand even the most adverse weather conditions. Each installation is unique to your property, considering all the variables that encompass it, and will be designed to make certain that your property has full and long-lasting protection from water intrusion. Our waterproofing membrane keeps the water off but also structurally enhances your building to reduce further damages and extends the service life of your building.
            </p>
          </div>
          <div className="sideimage">
            <img src={membrane3} alt="jj" />
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={membrane2} alt="jj" />
          </div>
          <div className="text">
            <h2>Long-term Benefits and Cost Efficiency</h2>
            <p>
            The application of Membrane Waterproofing by Champion Roof Insulation ensures a long-term solution. With this membrane, you will be spending less money on maintenance and repairs. You are also well protected against leaky water damages that tend to be costly. Stress less, as this takes care of your building investment for years.
            </p>
          </div>
        </div>
      </div>

      {/* <Process /> */}
    </div>
  );
};

export default Membrane;
