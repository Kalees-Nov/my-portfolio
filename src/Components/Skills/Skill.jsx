import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "Java", level: 90, desc: "Backend Development" },
  { name: "Spring Boot", level: 82, desc: "REST APIs & Microservices" },
  { name: "React.js", level: 76, desc: "Frontend Development" },
  { name: "JavaScript (ES6+)", level: 85, desc: "Interactive UI" },
  { name: "SQL", level: 72, desc: "Database Design" },
  { name: "Git & GitHub", level: 80, desc: "Version Control" },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((s, idx) => (
          <motion.div
            className="skill"
            key={s.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: idx * 0.07 }}
            viewport={{ once: true }}
          >
            <div className="skill-header">
              <h3 className="skill-title">{s.name}</h3>
              <span className="skill-desc">{s.desc}</span>
            </div>
            <div className="skill-bar">
              <motion.div
                className="skill-level"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                transition={{ duration: 1.2, delay: idx * 0.07 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
