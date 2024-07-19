import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';





const AppBar = () => {
  return (
    <div className='bg-container'>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid className='bg-dark'>
        <Navbar.Brand href="#home"><h1 className='text-info'><span><i class="bi bi-fan"></i> Piz za</span></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link className='text-secondary fw-bold' href="#home">Home</Nav.Link>
            <Nav.Link className='text-secondary fw-bold' href="#menu">Menu</Nav.Link>
            <Nav.Link className='text-secondary fw-bold' href="#musttry">Must Try</Nav.Link>
            <Nav.Link className='text-secondary fw-bold' href="#contact">Contact Us</Nav.Link>
            <Cart/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     

    </div>
  )
}

export default AppBar
