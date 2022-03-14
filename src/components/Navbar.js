import React from 'react';
import Container from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'; 


const NavBar = () => {
    return (
      <Navbar>
      <Container>
        <Navbar.Brand href="#home">Venta de Cartas</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Ingresar como: <a href="#login">Iván Molina</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
    
    
};


export default NavBar;