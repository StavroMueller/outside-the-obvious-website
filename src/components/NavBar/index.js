import React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => {
  return (
    <>  
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>Outside The Obvious</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Gallery" id="basic-nav-dropdown">
                <NavDropdown.Item href="/gallery/fashion">Fashion</NavDropdown.Item>
                <NavDropdown.Item href="/gallery/street">Street</NavDropdown.Item>
                <NavDropdown.Item href="/gallery/drawing">Drawing</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Books" id="basic-nav-dropdown">
                <NavDropdown.Item href="/books/midnightatmain">Midnight At Main</NavDropdown.Item>
                <NavDropdown.Item href="/books/mis">mis</NavDropdown.Item>
                <NavDropdown.Item href="/books/apoemoflima">A Poem Of Lima</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/booking">Booking</Nav.Link>
              <Nav.Link href="/store">Store</Nav.Link>
              <Nav.Link href="/something">About Julien</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container> 
      </Navbar>
    </>
  )
}

export default NavBar
