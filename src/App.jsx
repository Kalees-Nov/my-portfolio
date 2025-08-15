import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

import NavbarComp from "./components/navabar/navbar";
import Home from "./components/Home/home";
import AboutMe from "./components/About/AboutMe";
import Skills from "./components/Skills/Skill";
import Projects from "./components/Project/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footers/Footer";

function App() {
  return (
    <>
      <NavbarComp />
      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
