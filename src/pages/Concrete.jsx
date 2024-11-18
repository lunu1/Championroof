import React, { useEffect, useState } from "react";
import "../styles/servicewrapper.scss";
import concretebg from "../assets/images/concretebg.jpg"; // Direct import for the image
import concrete from "../assets/images/concrete.jpeg";
import concrete2 from "../assets/images/concrete2.jpeg";
import concrete3 from "../assets/images/concrete3.jpeg";

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
          src={concrete}
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
          Industrial Concrete Flooring
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={concrete2} alt="jj" />
          </div>
          <div className="text">
            <h2>Gold Standard of Durability and Protection</h2>
            <p>
              Industrial Concrete Flooring by Champion Roof Insulation sets the
              standard for durability and strength. Our concrete flooring is
              produced to withstand heavy weights under much extreme conditions,
              for high strength and durability in warehouses, factories, or any
              other industrial facility. Using the most recent methods and best
              practices, we are able to build a smooth, hard surface to
              accommodate functionality and safety in your work area.
            </p>
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="text">
            <h2>Advanced Techniques for Optimal Performance</h2>
            <p>
              Our professionals combine advanced technology with the finest
              quality materials for superior concrete flooring, meeting the
              peculiar demands of your industry. We pay attention to the
              specific needs of your facility so that our flooring solutions can
              be specifically made to resist heavy machinery, chemicals, and
              temperature changes. It is because of this focus on durability and
              performance that not only reduces the chances of damage but also
              offers a safer working area.
            </p>
          </div>
          <div className="sideimage">
            <img src={concrete3} alt="jj" />
          </div>
        </div>
      </div>

      <div className="Solutiontext">
        <div className="pointheading">
          <div className="sideimage">
            <img src={concretebg} alt="jj" />
          </div>
          <div className="text">
            <h2>Long-term Value and Cost Savings</h2>
            <p>
              Invest in industrial concrete flooring from Champion Roof
              Insulation and get a solution that will pay dividends for long.
              Our flooring is designed to save you money on maintenance and
              repairs. Plus, with its toughness, you'll face fewer disruptions
              in operations. You will have lesser wear and tear, which makes it
              safer, and you will have peace of mind knowing your facility is
              well-protected for efficiency at work. Champion Roof Insulation
              has the ability to give industrial concrete flooring strength,
              sustainability, and tremendous cost savings
            </p>
          </div>
        </div>
      </div>

      {/* <Process /> */}
    </div>
  );
};

export default WetArea;
