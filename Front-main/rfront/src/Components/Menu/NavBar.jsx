import React, { useState, useEffect } from "react";
import { Button, Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import logoheader from "../../assets/Home/logoheader.png";
import "./NavBar.css";

export default function NavBar() {
  
  return (
    <div>
      <Navbar className="nav" fixed="top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="Inicio">
            <img src={logoheader} alt="HoneyPet +" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="Inicio">Inicio</Nav.Link>
              <Nav.Link href="Explorar">Explorar</Nav.Link>
              <Nav.Link href="About">Acerca de Nosotros</Nav.Link>
              <Nav.Link href="Team">Equipo</Nav.Link>
              <Nav.Link href="Logout">Salir</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
