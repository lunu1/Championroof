import React, { useEffect, useState } from "react";
import "../styles/servicewrapper.scss";
import combosystem1 from "../assets/images/combosystem1.jpeg"; // Direct import for the image
import combosystem2 from "../assets/images/combo.jpeg";
import combosystem3 from "../assets/images/combosystem3.jpeg";
import combosystem4 from "../assets/images/combosystem4.jpeg";


const Combosystem = () => {
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
          src={combosystem2}
          alt="GRP Lining"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            display: imageLoaded ? "block" : "none", // Hide image until loaded
            // filter: "brightness(50%)",
            zIndex: 0,
          }}
          onLoad={() => setImageLoaded(true)}
        />

        <div className="centered-text" style={{ zIndex: 2 }}>
          Combo System
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={combosystem3} alt="jj" />
          </div>
          <div className="text">
            <h2> Setting the Gold Standard in Protection for Your Building</h2>
            <p>
              In Champion Roof Insulation, the Combo System marries ultimate
              waterproofing and insulation in one strong application for
              ultimate protection of your structure. Integrated with the system
              to prevent water infiltration but also effective for thermal
              insulation, this results in a durable shield that will increase
              energy efficiency and promote long-term sustainability. The Combo
              System significantly reduces the chances of damage to your
              property by protecting it from external elements and hence ensures
              longevity.
            </p>
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="text">
            <h2>Advanced Technology for Optimal Performance</h2>
            <p>
              Our company's professionals employ advanced methods and best
              available materials to provide a waterproof, robust shield against
              even the most unfavorable weather conditions. The Combo System is
              designed to pay due attention to all the peculiarities of your
              property in order to keep water out and maintain a consistent
              internal temperature. This should be a dual-function system that
              will contribute to helping businesses cut energy consumption and
              reduce maintenance costs in the long run.
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
            <img src={combosystem4} alt="jj" />
          </div>
          <div className="text">
            <h2>Long-term Value and Cost Savings</h2>
            <p>
              By choosing our Combo System, you're investing in a solution that
              protects your building while increasing its energy efficiency. The
              power-saving capability of the system contributes to lower utility
              costs, while durability means fewer repairs and maintenance
              expenses. Long-term protection with reduced operation costs and
              peace of mind-you know your property is safe, secure, and built to
              last with Champion Roof Insulation's Combo System.
            </p>
          </div>
        </div>
      </div>

      {/* <Process /> */}
    </div>
  );
};

export default Combosystem;
