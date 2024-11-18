import React, { useEffect, useState } from "react";
import "../styles/servicewrapper.scss";
import grp1 from "../assets/images/grp1.jpeg"; // Direct import for the image
import grp2 from "../assets/images/grp2.jpeg";
import grp3 from "../assets/images/grp3.jpeg";
import grp4 from "../assets/images/grp4.jpeg";
import Process from "../components/Process";

const GRPLining = () => {
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
          src={grp4}
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
          GRP Lining System
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={grp1} alt="jj" />
          </div>
          <div className="text">
            <h2>Unmatched Durability for Long-Lasting Protection</h2>
            <p>
              The Champion Roof Insulation GRPGlass Reinforced Plastic-Lining
              System provides protection and durability unrivaled in the
              industry for your building against water ingress, chemical
              exposure, and other environmental elements. The seamless,
              high-strength barrier of the GRP lining system not only greatly
              enhances the structural integrity and prolongs the service life of
              your building but offers you unmatched protection in waterproofing
              and corrosion protection.
            </p>
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="text">
            <h2>Advanced Technology for Complete Coverage</h2>
            <p>
              Our expert team offers accurate application of the GRP Lining
              System-a hard, impenetrable layer that contours to the particular
              profile of your structure. The flexibility and strength of this
              lining provide resistance against severe weather conditions, harsh
              chemicals, and extreme situations to give your roofs, tanks, and
              pools full protection. Its versatility means that it is ideal not
              only for new installations but also for refurbishment projects,
              giving excellent performances in a wide variety of applications.
            </p>
          </div>
          <div className="sideimage">
            <img src={grp2} alt="jj" />
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={grp3} alt="jj" />
          </div>
          <div className="text">
            <h2>Cost-Effective Protection for the Long Haul</h2>
            <p>
              Investment in Champion Roof Insulation's GRP Lining System means
              savings that last. Highly durable, it minimizes repairs; hardy and
              resistant to wear and tear, it guarantees a low-maintenance
              solution that will easily take the knocks over time. That means
              reduced operational costs and much greater peace of mind, in the
              knowledge that your property boasts a premier system designed to
              last.
            </p>
          </div>
        </div>
      </div>

      <Process />
    </div>
  );
};

export default GRPLining;
