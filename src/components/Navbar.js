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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
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
      <Container >
      
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  >
          <Nav className="me-auto " >
                <Link to="/" className="header-link p-2 m-2 text-link">Cartas Pokemon</Link>
                <Link to="/productos" className="header-link p-2 m-2 text-link">Productos</Link>
                <Link to="/nosotros" className="header-link p-2 m-2 text-link">Nosotros</Link>
                <Link to="/contacto" className="header-link p-2 m-2 text-link">Contacto</Link>
            
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