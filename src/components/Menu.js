import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Menu() {
  return <>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link href="#/">Universities</Nav.Link>
        <Nav.Link href="#books">Books</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </>
}