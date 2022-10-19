import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
      <Navbar className='navbar navbar-expand-lg navbar-dark bg-primary' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Zaika</Navbar.Brand>
          </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to='/cart'>
                  <Nav.Link> <i className="fa-solid fa-cart-shopping"></i>Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link><i className="fa-solid fa-user"></i>Login</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header