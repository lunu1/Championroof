import React, { useEffect, useState } from "react";
import "../styles/servicewrapper.scss";
import wetbg from "../assets/images/wetbg.jpg"; // Direct import for the image
import wet1 from "../assets/images/wet1.jpeg";
import wet2 from "../assets/images/wet2.jpeg";
import wet3 from "../assets/images/wet3.jpeg";

import Process from "../components/Process";

const WetArea = () => {
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
          src={wetbg}
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
          Wet Areas Waterproofing
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={wet1} alt="jj" />
          </div>
          <div className="text">
            <h2>Wet areas waterproofing with a comprehensive approach</h2>
            <p>
              Wet Areas Waterproofing is one of the services offered at Champion
              Roof Insulation, dealing with special protection against
              moisture-prone areas like bathrooms, kitchens, balconies, or
              swimming pools. Such places confront water continuously, hence
              being prone to leaks, mold, and long-term damages. Our
              waterproofing solutions keep such places sealed and guarded
              against water seepage, protecting your structure's integrity.
            </p>
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="text">
            <h2>Advanced Technology for Maximum Durability</h2>
            <p>
              We use very advanced materials and methods of waterproofing to
              protect for a long period in wet areas. Carefully and competently
              applied, waterproofing membranes and coatings made of high-quality
              material withstand frequent direct contact with water without loss
              of strength and durability. From residential to commercial
              applications, our solutions are uniquely fitted to meet different
              needs in each space with ease and seamlessness. None have to worry
              about water leakage or damage anymore.
            </p>
          </div>
          <div className="sideimage">
            <img src={wet2} alt="jj" />
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={wet3} alt="jj" />
          </div>
          <div className="text">
            <h2>Cost-Effective, Long-Term Benefits</h2>
            <p>
              By investing in Champion Roof Insulation's Wet Areas Waterproofing
              service, you are also protecting the future of your investment.
              Our solutions prevent costlier repairs due to water damage and
              encourage a much healthier indoor environment that is mold-free.
              Improved moisture control reduces further maintenance problems for
              wet areas and extends the useful life, giving you peace of mind
              and long-term savings.
            </p>
          </div>
        </div>
      </div>

      {/* <Process /> */}
    </div>
  );
};

export default WetArea;
