import React, { useState, useEffect } from "react";
import "../styles/workflow.scss";
import concretebg from "../assets/images/concretebg.jpg";
import { motion, AnimatePresence } from "framer-motion";

const letters = "STAGES OF WORK".split(""); // Split the text into individual letters

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each letter
    },
  },
};

const letterVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const WorkFlow = () => {
  const [isChampion, setIsChampion] = useState(true);

  // Toggle between Champion and Stages of Work texts
  useEffect(() => {
    const interval = setInterval(() => {
      setIsChampion((prev) => !prev);
    }, 5000); // 5 seconds delay (2 seconds animation + 3 seconds pause)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="workflow">
    <div className="stages">
  <div className="stagespoints">
    <div className="top-right">
      <h1>APPLICATION OF</h1>
      <h1 style={{ textAlign: "end" }}>PU FOAM</h1>
    </div>
    <div className="bottom-left">
      <h3>1. The first step involves applying polyurethane foam as an insulating layer.</h3>
    </div>
  </div>

  <div className="stagespoints">
    <div className="top-right">
      <h1>APPLICATION OF</h1>
      <h1 style={{ textAlign: "end" }}>UV FOAM</h1>
    </div>
    <div className="bottom-left">
      <h3>2. UV-resistant foam is applied to protect surfaces from ultraviolet radiation.</h3>
    </div>
  </div>

  <div className="stagespoints">
    <div className="top-right">
      <h1>WATER TEST</h1>
    </div>
    <div className="bottom-left">
      <h3>3. The system is tested to ensure there are no leaks after foam application.</h3>
    </div>
  </div>

  <div className="stagespoints">
    <div className="top-right">
      <h1 style={{ textAlign: "end" }}>RIDGES</h1>
      <h1>PREPARATIONS</h1>
    </div>
    <div className="bottom-left">
      <h3>4. Preparing ridge areas for proper sealing and waterproofing.</h3>
    </div>
  </div>

  <div className="stagespoints">
    <div className="top-right">
      <h1>LAYING OF</h1>
      <h1 style={{ textAlign: "end" }}>SCREED</h1>
    </div>
    <div className="bottom-left">
      <h3>5. Applying a layer of screed to level the surface.</h3>
    </div>
  </div>

  <div className="stagespoints">
    <div className="top-right">
      <h1>SCREED</h1>
      <h1 style={{ textAlign: "end" }}>LEVELING</h1>
    </div>
    <div className="bottom-left">
      <h3>6. Ensuring the screed is evenly leveled across the surface.</h3>
    </div>
  </div>

  <div className="stagespoints">
    <div className="top-right">
      <h1>GROOVE</h1>
      <h1 style={{ textAlign: "end" }}>CUTTING</h1>
    </div>
    <div className="bottom-left">
      <h3>7. Cutting grooves into the surface for better adhesion of materials.</h3>
    </div>
  </div>

  <div className="stagespoints">
    <div className="top-right">
      <h1>APPLICATION OF</h1>
      <h1 style={{ textAlign: "end" }}>SEALANT</h1>
    </div>
    <div className="bottom-left">
      <h3>8. A sealant is applied to the grooves to prevent water ingress.</h3>
    </div>
  </div>

  <div className="stagespoints">
    <div className="top-right">
      <h1>PREPARATION OF</h1>
      <h1 style={{ textAlign: "end" }}>ANGLE FILLET</h1>
    </div>
    <div className="bottom-left">
      <h3>9. Prepping the surface for angle fillets to reinforce joints.</h3>
    </div>
  </div>

  <div className="stagespoints">
    <div className="top-right">
      <h1>ANGLE</h1>
      <h1 style={{ textAlign: "end" }}>FILLET</h1>
    </div>
    <div className="bottom-left">
      <h3>10. Installing fillets to strengthen corners and joints.</h3>
    </div>
  </div>

  <div className="stagespoints">
    <div className="top-right">
      <h1>APPLICATION OF</h1>
      <h1 style={{ textAlign: "end" }}>FINAL COAT</h1>
    </div>
    <div className="bottom-left">
      <h3>11. A protective final coat is applied for durability.</h3>
    </div>
  </div>
</div>



      <div className="stagesphoto">
        <img src={concretebg} alt="" />

       <div className="stage-text">
         STAGES OF WORK
       </div>
       <div className="champion-text">
       Champion roof insulation
       </div>
     
       
      </div>
    </div>
  );
};

export default WorkFlow;
