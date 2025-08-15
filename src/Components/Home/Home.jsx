import React from "react";
import { motion } from "framer-motion";
import homeImage from "../../assets/home.jpg";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <img src={homeImage} className="home-image" alt="Developer workspace" />
      <div className="overlay" />
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1>Hi, I'm <span className="highlight">Kaleeswaran E</span></h1>
        <p>Java Developer · Aspiring Data Scientist</p>
        <div className="cta-row">
          <a href="#projects" className="btn-primary-gradient">View My Work</a>
          <a href="#contact" className="btn-primary-gradient ghost">Contact Me</a>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
