import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.svg' 



const NavBar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
      <img
        src={logo} 
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
      />
  </Container>
      <Container>
        <Navbar.Brand href="#home">Cartas Pokemon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#damaged">Damaged</Nav.Link>
            <Nav.Link href="#played">Played</Nav.Link>
            <NavDropdown title="Pokemones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#water">Agua</NavDropdown.Item>
              <NavDropdown.Item href="#fire">Fuego</NavDropdown.Item>
              <NavDropdown.Item href="#land">Tierra</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Herb">Hierba</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Accesorios</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Varios
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );

    
    
};


export default NavBar;