import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import "../components/myNavbar.style.css";

const MyNavbar = () => {
  return (
    <Navbar
      className="animate-navbar nav-theme justify-content-between "
      fixed="top"
      collapseOnSelect
      expand="md"
      variant="dark"
    >
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" defaultActiveKey="#home">
          <Nav.Link href="#home">Accueil</Nav.Link>
          <Nav.Link href="#about">A propos</Nav.Link>
          <Nav.Link href="#skills">Compétences</Nav.Link>
          <Nav.Link href="#portfolio">Projets</Nav.Link>
          <Nav.Link href="#experiences">Parcours</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
