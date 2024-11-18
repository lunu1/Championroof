import React, { useEffect, useState } from "react";
import "../styles/servicewrapper.scss";
import combosystem1 from "../assets/images/spray1.jpeg"; // Direct import for the image
import combosystem2 from "../assets/images/spray2.jpeg";
import combosystem3 from "../assets/images/spray3.jpeg";
import combosystem4 from "../assets/images/spray4.jpeg";

import Process from "../components/Process";

const Polyurethene = () => {
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
          src={combosystem4}
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
        Spray Polyurethene Foam
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={combosystem3} alt="jj" />
          </div>
          <div className="text">
            <h2>Gold Standard in Building Protection</h2>
            <p>
            The Champion Roof Insulation SPF system offers the ultimate in one-step waterproofing and insulation. Advanced technology protection against water infiltration, combined with superior thermal insulation, protects your building while making it much more energy-efficient. This seamless, durable SPF barrier will protect your structure from external elements while improving energy efficiency for true sustainability.
            </p>
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="text">
            <h2> Advanced Technology for Maximum Efficiency</h2>
            <p>
            Our staff of professionals applies advanced SPF technology, creating a strong, watertight seal ready to handle even the most adverse weather conditions. Spray Polyurethane Foam conforms to the unique contours of your building, providing complete coverage and ensuring consistent indoor temperatures. Such a dual-function system keeps water out and reduces energy consumption, thus helping your business lower utility costs while minimizing long-term maintenance needs.
            </p>
          </div>
          <div className="sideimage">
            <img src={combosystem1} alt="jj" />
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={combosystem2} alt="jj" />
          </div>
          <div className="text">
            <h2>Long-term Value and Cost Savings</h2>
            <p>
            Champion Roof Insulation's Spray Polyurethane Foam is an investment in your property's future. Energy-saving benefits from SPF put significant dollars back into your pocket due to reduced utility bills, and its longevity equates to less frequent repairs and maintenance over time. SPF provides the assurance that your building is soundly protected while being energy-efficient and built for years to come to provide maximum value with reduced operational costs.
            </p>
          </div>
        </div>
      </div>

      {/* <Process /> */}
    </div>
  );
};

export default Polyurethene;
