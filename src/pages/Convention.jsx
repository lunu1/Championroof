import React, { useEffect, useState } from "react";
import "../styles/servicewrapper.scss";
import combosystem1 from "../assets/images/convention.jpeg"; // Direct import for the image
import combosystem2 from "../assets/images/conventional2.jpeg";
import combosystem3 from "../assets/images/conventional3.jpeg";
import combosystem4 from "../assets/images/convetional4.jpeg";

import Process from "../components/Process";

const Conventional = () => {
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
          Conventional Waterproofing System
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={combosystem3} alt="jj" />
          </div>
          <div className="text">
            <h2>From Champion Roof Insulation, conventional</h2>
            <p>
            From Champion Roof Insulation, conventional waterproofing services come with tried-and-tested protection against water ingress. Comprehensive waterproofing solutions at Champion Roof Insulation ensure your building stays dry and protected against leakages, moisture, and environmental damage. In this regard, high-quality membranes and sealants are applied by making the approach suitable according to the structural needs.
            </p>
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="text">
            <h2>Proven Techniques for Dependable Results</h2>
            <p>
            Application of Conventional Waterproofing Systems: Our company applies conventional waterproofing systems by using widely recognized leading materials. Whether it be bituminous membranes, liquid-applied systems, or sheet membranes, every product used in creating a solid and watertight barrier against harsh weather conditions is handpicked. The result is very long-lasting protection that maintains the structural integrity of your building and preserves it from possible water damages that can be very costly over time.
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
            <h2>Consistent, Reliable, and Long-Lasting Protection</h2>
            <p>
            Conventional waterproofing is moderately budget-friendly for protection to the building. Indeed, the value addition due to avoided leaks and damage from moisture that can result in expensive repairs is relatively high. Champion Roof Insulation provides a reliable waterproofing solution, carried out professionally with minimal disruption to your operations to stand the test of time, with the intent to maintain the longevity of your structure without breaking your bank.
            </p>
          </div>
        </div>
      </div>

      {/* <Process /> */}
    </div>
  );
};

export default Conventional;
