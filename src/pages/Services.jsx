import React, { useEffect } from "react";
import "../styles/services.scss";
import { motion } from "framer-motion";
import image1 from "../assets/images/homebg.jpg";
import image2 from "../assets/images/G1Sheet.jpg";
import image3 from "../assets/images/GRPLining.jpg";
import image4 from "../assets/images/MembraneWaterproofing.jpg";
import image5 from "../assets/images/MembraneWaterproofing2.jpg";
import image6 from "../assets/images/Substructure.jpg";
import image7 from "../assets/images/VerticalArea.jpg";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ title, description, image, path }) => {
  const navigate = useNavigate();

  return (
    <motion.div className="service-card">
      <div className="back-card"></div>

      <motion.div
        className="front-card"
        // style={{ backgroundImage: `url(${image})` }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
        <button
          onClick={() => {
            navigate(path);
          }}
        >
          Know More
        </button>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Combo System",
      description:
        "Champion Roof Insulation's Combo System combines superior waterproofing and insulation in one robust application, enhancing energy efficiency, reducing maintenance costs and system comes with 25 years Guarantee.",
      image: image1,
      path: "/combosystem",
    },
    {
      title: "Conventional Waterproofing System",
      description:
        "Champion Roof Insulation's Conventional Waterproofing System combines trusted techniques with modern materials to provide exceptional water protection for your building.",
      image: image2,
      path: "/conventional",
    },
    {
      title: "Spray Polyurethene Foam",
      description:
        " Champion Roof Insulation's Spray Polyurethane Foam (SPF) offers seamless waterproofing and superior insulation, creating a durable, energy-efficient barrier that protects your building from the elements, reduces utility costs, and minimizes maintenance needs for long-term value.",
      image: image3,
      path: "/polyurethene",
    },
    {
      title: "GI Sheet Waterproofing",
      description:
        "Champion Roof Insulation’s GI Sheet Waterproofing offers a durable, corrosion-resistant solution that keeps your building dry and safe from water damage, ensuring long-lasting protection and cost-effective maintenance for years to come.",
      image: image4,
      path: "/gonesheet",
    },
    {
      title: "GRP Lining System",
      description:
        "Champion Roof Insulation's GRP Lining System offers unmatched durability and strength for tanks and pools, ensuring long-lasting protection against heavy loads, chemicals, and temperature fluctuations while reducing maintenance costs and operational disruptions.",
      image: image5,
      path: "/grp",
    },
    {
      title: "Membrane Waterproofing ",
      description:
        "Champion Roof Insulation's Membrane Waterproofing provides robust, long-lasting protection against leaks and water damage, ensuring your building remains safe and structurally sound while minimizing maintenance costs.",
      image: image6,
      path: "/membrane",
    },
    {
      title: "Sub Structure Waterproofing ",
      description:
        "Champion Roof Insulation’s Sub Structure Waterproofing protects your foundation from water damage with advanced solutions that ensure longevity and reduce costly repairs, offering peace of mind and sustainable durability for your building.",
      image: image6,
      path: "/substructure",
    },
    {
      title: "Wet Areas Waterproofing ",
      description:
        "Champion Roof Insulation's Wet Areas Waterproofing service protects moisture-prone spaces like bathrooms and kitchens with advanced materials that prevent leaks and mold, ensuring durability and long-term savings for your investment.",
      image: image6,
      path: "/wetarea",
    },
    {
      title: "Industrial Concrete Flooring ",
      description:
        "Champion Roof Insulation's Industrial Concrete Flooring delivers unmatched durability and strength, expertly engineered to withstand heavy loads and harsh conditions, ensuring a safe, low-maintenance solution that reduces downtime and saves you money in the long run.",
      image: image6,
      path: "/concrete",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      <h2>Services</h2>
      <p className="services-description">
        We have a "measure twice, cut once" philosophy and have a knack for the
        details. Using high grade roofing materials and regularly participating
        in certification classes ensures our work is always of the highest
        QUALITY.
      </p>

      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            // image={service.image}
            path={service.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
