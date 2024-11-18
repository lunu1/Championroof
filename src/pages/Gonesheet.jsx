import React, { useEffect, useState } from "react";
import "../styles/servicewrapper.scss";
import sheet1 from "../assets/images/sheet1.jpeg"; // Direct import for the image
import sheet2 from "../assets/images/sheet2.jpeg";
import sheet3 from "../assets/images/sheet3.jpeg";
import sheet4 from "../assets/images/sheet4.jpeg";

import Process from "../components/Process";

const Gonesheet = () => {
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
          src={sheet1}
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
        GI Sheet Waterproofing
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={sheet2} alt="jj" />
          </div>
          <div className="text">
            <h2>Best Solution for Protection of Your Building</h2>
            <p>
            At Champion Roof Insulation, we have the most modern approach to waterproofing-our GI Sheet Waterproofing. Basically, this system prevents water from seeping into a structure and covers the building in a dry and safe manner. GI sheets provide a hard and strong obstruction to water's entry into any building. The result of GI sheets is a strong, long-lasting, and durable waterproofing system for the most intense weather conditions, ultimately having long-lasting effects on one's building.
            </p>
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="text">
            <h2>Advanced materials for the highest degree of durability.</h2>
            <p>
            Our GI Sheet Waterproofing system is designed for optimal performance by using advanced materials with skillful installation techniques. The galvanized iron sheets offer very good resistance to corrosion and are sealed professionally for watertight shielding. This will keep your building leak-free and impenetrable to moisture, ensuring that water does not drip in or damage anything. Our team assumes a tailored approach in which the particular needs of your structure are assessed and an appropriate waterproofing solution is implemented to ensure superior performance.
            </p>
          </div>
          <div className="sideimage">
            <img src={sheet3} alt="jj" />
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={sheet4} alt="jj" />
          </div>
          <div className="text">
            <h2>Long-term protection and cost-effectiveness</h2>
            <p>
            Champion Roof Insulation secures long life and value to your property by providing GI Sheet Waterproofing. The long-lasting GI sheets mean lesser frequency in repairs, while their water-tight capabilities lower the maintenance cost of the overall structure. Very good rust protection and environmental wear make this system one that will keep your building safe and sound for years. Rest assured, GI sheet waterproofing gives you peace of mind because your property is ensured with a system that lasts.
            </p>
          </div>
        </div>
      </div>

      {/* <Process /> */}
    </div>
  );
};

export default Gonesheet;
