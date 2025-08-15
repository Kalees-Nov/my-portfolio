// src/App.jsx
import React, { useEffect } from "react";
import Home from "./Components/Home/Home.jsx";
import Navbar from "./Components/Navbar/Nav.jsx";
import AboutMe from "./Components/About/AboutMe.jsx";
import Projects from "./Components/Project/Projects.jsx";
import Skills from "./Components/Skills/Skill.jsx";
import Contact from "./Components/Contact/Contacts.jsx";
import Footer from "./Components/Footers/Footer.jsx";



import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
