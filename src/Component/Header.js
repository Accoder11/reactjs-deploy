import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar sticky="top" bg="warning" expand="lg">
      <Container>
        <Navbar.Brand href="#">REACT Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action1">CATEGORIES</Nav.Link>
            <Nav.Link href="#action1">SHOP</Nav.Link>
            <Nav.Link href="#action1">ABOUT</Nav.Link>
            <Nav.Link href="#action2">CONTACT</Nav.Link>
            <Nav.Link href="#action2">ACOUNT</Nav.Link>
            <Nav.Link href="#action2">BLOG</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;