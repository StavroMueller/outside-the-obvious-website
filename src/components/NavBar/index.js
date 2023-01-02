import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
    <>  
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand>Outside The Obvious</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <NavDropdown title="Gallery" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="gallery/fashion">Fashion</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="gallery/street">Street</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="gallery/travel">Travel</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="gallery/fine-art">Fine Art</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Books" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="books/midnightatmain">Fine Art</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="books/mis">mis</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="books/apoemoflima">A Poem Of Lima</Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link><Link to="booking">Booking</Link></Nav.Link>
              <Nav.Link><Link to="store">Store</Link></Nav.Link>
              <Nav.Link><Link to="about">About</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container> 
      </Navbar>
    </>
  )
}

export default NavBar;
