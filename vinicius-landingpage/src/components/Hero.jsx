import React from "react";
/*eslint-disable no-unused-vars*/
import { motion } from "framer-motion";
/*eslint-enable no-unused-vars*/
import { TypeAnimation } from "react-type-animation";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="intro-text">👋 Hi, I’m</p>
        <h1 className="hero-title">Vinicius Santos</h1>

        <h2 className="hero-role">
          <TypeAnimation
            sequence={[
              "Full Stack Developer", 2000,
              "Software Engineer", 2000,
              "Web Creator", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="hero-subtitle">
          Crafting modern, responsive and scalable digital experiences focused on clarity and performance.
        </p>

        <div className="hero-buttons">
          <motion.a
            href="https://vinicius-santos-portfolio.vercel.app"
            className="hero-btn primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.a>

          <motion.a
            href="mailto:contato.viniciuspsantos28@gmail.com"
            className="hero-btn secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </div>

        <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
              <span>Scroll Down</span>
              <div className="mouse">
              <div className="wheel"></div>
              </div>
          </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
