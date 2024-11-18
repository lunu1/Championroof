import React, { useEffect, useState } from "react";
import "../styles/servicewrapper.scss";
import structure from "../assets/images/substructure.jpeg"; // Direct import for the image
import substructure2 from "../assets/images/substructure1.jpeg";
import substructure3 from "../assets/images/substructure2.jpeg";
import substructure4 from "../assets/images/substructure3.jpeg";

import Process from "../components/Process";

const Substructure = () => {
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
          src={structure}
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
          Sub Structure Waterproofing
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={substructure2} alt="jj" />
          </div>
          <div className="text">
            <h2>The Gold Standard in the Protection of the Sub Structure</h2>
            <p>
              Sub Structure Waterproofing Service: Champion Roof Insulation
              offers the highest level of protection to the most sensitive part
              of your structure-your foundation. Actually, substructures are the
              most susceptible part to water seepage, which may cause long-term
              damage and will eventually weaken your entire building or
              property. Our progressive waterproofing solutions offer a strong,
              long-lasting barrier that does not let water in but also protects
              your foundation from all kinds of moisture issues, thus
              guaranteeing longevity and safety for your structure.
            </p>
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="text">
            <h2>Advanced Technology - Higher Performance</h2>
            <p>
            Our proficient team executes a solid waterproofing system in accordance with the unique characteristics of your property's substructure, using cutting-edge methods and premium materials. Our Sub Structure Waterproofing solutions are designed to resist even the harshest environmental conditions by not allowing water to come into contact with your building, even in areas that show the propensity for flooding or high water tables. This advanced approach guarantees maximum performance while maintaining the structural stability of your property.
            </p>
          </div>
          <div className="sideimage">
            <img src={substructure4} alt="jj" />
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={substructure3} alt="jj" />
          </div>
          <div className="text">
            <h2>Ensuring Long-Term Value and Cost Savings</h2>
            <p>
            Investing in Champion Roof Insulation's Sub Structure Waterproofing service secures protection for your building foundation that will last. In a way, you try to avoid water damage at the very source of your building, hence reducing the risk of expensive repairs that come along with structural issues and any future maintenance. Our system not only preserves the integrity of your substructure but offers long-term peace of mind years into the future, knowing your property is protected from potential water-related threats. Champion Roof Insulation provides reduced operational costs and enhanced durability for cost-effective protection that's sustainable.
            </p>
          </div>
        </div>
      </div>

      {/* <Process /> */}
    </div>
  );
};

export default Substructure;
