import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import profileImg from "../../assets/aboutme.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <motion.div initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: .7 }} viewport={{ once: true }}>
              <Image src={profileImg} roundedCircle fluid className="profile-image" alt="Kaleeswaran Eswaran" />
            </motion.div>
          </Col>
          <Col md={8}>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .7 }} viewport={{ once: true }}>
              <h2 className="about-title">About Me</h2>
              <p className="about-text">
                👋 I’m <strong>Kaleeswaran Eswaran</strong>, a <strong>Java Developer</strong> with 2+ years building robust backends & dynamic UIs.
                I work with <strong>Java, Spring Boot, React, and MySQL</strong> and love writing clean, maintainable code.
              </p>
              <p className="about-text">
                💡 I enjoy crafting REST APIs, optimizing performance, and learning new tech—especially around AI and data. Always up for meaningful projects!
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
