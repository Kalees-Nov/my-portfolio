import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React, showing projects, skills, and experience.",
    tech: ["React", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    title: "E-Commerce App",
    description: "Full-stack app with product listing, cart, and secure checkout.",
    tech: ["Spring Boot", "React", "MySQL"],
    link: "#",
    github: "https://github.com/yourusername/ecommerce"
  },
  {
    title: "Data Analysis Tool",
    description: "Python tool to explore CSVs and generate visual reports.",
    tech: ["Python", "Pandas", "Matplotlib"],
    link: "#",
    github: "https://github.com/yourusername/data-analysis"
  }
];

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <motion.div
        className="projects-slider-wrapper"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >
        <Slider {...settings} className="projects-slider">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <h3>{p.title}</h3>
              <p className="desc">{p.description}</p>
              <div className="tech-stack">
                {p.tech.map(t => <span key={t} className="tech">{t}</span>)}
              </div>
              <div className="project-links">
                <a className="gradient-btn" href={p.link} target="_blank" rel="noreferrer">Live Demo</a>
                <a className="gradient-btn" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}

export default Projects;
