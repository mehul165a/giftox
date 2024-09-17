import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Import the custom CSS file

const NavbarComponent = () => (
  <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
  
    <Navbar.Collapse className="justify-content-center">
      <Nav className="navbar-nav">
      <Nav.Link href="#banner">Home</Nav.Link>
        <Nav.Link href="#products">Products</Nav.Link>
        <Nav.Link href="#contact">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarComponent;
