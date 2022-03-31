import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav';
import logo from '../logo.svg' 
import Cartwidget from '../components/CartWidget';
import { Link } from "react-router-dom"



const NavBar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Link to="/">
        <img
        src={logo} 
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
      /></Link>
      
  </Container>
      <Container>
      
        <Navbar.Brand href="#home">Cartas Pokemon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
        
                <Link to="/category/productos" className="header-link">Productos</Link>
                <Link to="/category/nosotros" className="header-link">Nosotros</Link>
                <Link to="/category/contacto" className="header-link">Contacto</Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">            
              <Cartwidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );

    
    
};


export default NavBar;