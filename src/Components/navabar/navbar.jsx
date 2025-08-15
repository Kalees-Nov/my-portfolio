import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Navbar.css";

function NavbarComp() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="brand-text">KALEESWARAN E</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <a href="#contact" className="gradient-btn ms-3">Hire Me</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
