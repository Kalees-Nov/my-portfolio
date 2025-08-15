// src/App.jsx
import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Nav";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/About/AboutMe";
import Projects from "./Components/Project/Projects";
import Skills from "./Components/Skills/Skill";
import Contact from "./Components/Contact/Contacts";
import Footer from "./Components/Footers/Footer";


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
