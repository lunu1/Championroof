import React from "react";
import "../styles/whyus.scss";
import { Price, Process, Quality, Commitment } from "../assets/svgs/Svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 0, scale: 0 }, // Change opacity to 0
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const WhyUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.1, // Adjust based on when you want to trigger the animation
  });

  return (
    <div className="whyus">
      <h2>Why Choose</h2>
      <h1>Champion Roof Insulation?</h1>
      <motion.div
        className="box"
        ref={ref} // Attach the ref here
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="points" variants={item}>
          <div className="logobox">
            <motion.div
              className="pointbox"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <Quality height="40px" width="40px" />
            </motion.div>

            <div className="pointheading">
              <h3>Our Quality</h3>
            </div>
          </div>

          <motion.div className="pointcontent">
            At Champion Roof Insulation, improvement and excellence are pursued
            in every project. Specifications will be accurate, and workmanship
            will be skillful to ensure that waterproofing and insulation
            projects are durable and of high quality, meeting or exceeding the
            accepted standards of the industry. Quality and precision form the
            backbone of our success.
          </motion.div>
        </motion.div>

        <motion.div className="points" variants={item}>
          <div className="logobox">
            <motion.div
              className="pointbox"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <Commitment height="40px" width="40px" />
            </motion.div>
            <div className="pointheading">
              <h3>Our Commitment</h3>
            </div>
          </div>
          <motion.div className="pointcontent" variants={item}>
            We are committed to providing premium waterproofing and insulation
            services that exceed the expectations of our clients. Excellence in
            quality and safety, with customer satisfaction in mind, guides our
            work processes. Excellence will be our hallmark in whatever project
            we embark on, ensuring your business is well-protected and your
            objectives achieved.
          </motion.div>
        </motion.div>

        <motion.div className="points" variants={item}>
          <div className="logobox">
            <motion.div
              className="pointbox"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <Price height="40px" width="40px" />
            </motion.div>
            <div className="pointheading">
              <h3>Our Price</h3>
            </div>
          </div>
          <motion.div className="pointcontent" variants={item}>
            Quality is never sacrificed in our pricing at Champion Roof
            Insulation, although the prices remain very competitive. For any
            budget, cost-effective solutions are available that will provide
            long-term effects. With transparent pricing, there are no hidden
            surprises; this way, you will know that the value for each job is
            excellent.
          </motion.div>
        </motion.div>

        <motion.div className="points" variants={item}>
          <div className="logobox">
            <motion.div
              className="pointbox"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <Process height="40px" width="40px" />
            </motion.div>
            <div className="pointheading">
              <h3>Our Process</h3>
            </div>
          </div>
          <motion.div className="pointcontent" variants={item}>
            Champion Roof Insulation ensures that the quality is maintained
            through proper planning, expert execution, and continuous process
            refinement for long-lasting solutions to meet or exceed industry
            standards. Each project is carefully managed to ensure superior
            results and client satisfaction.
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyUs;
