import React, { useState } from 'react'; // Import useState
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './intro.css';

function Header({ toggleDarkMode, darkMode }) {

  return (
    <Navbar expand="lg" className={`bg-body-tertiary fixed-top justify-content-end ${darkMode ? 'dark' : ''}`}>
      <Container className='ms-auto'>
        <Navbar.Brand href="#home">Akash</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link href="#hello-container">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
          <Button onClick={toggleDarkMode} className="ms-3">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;