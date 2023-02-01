import React from "react";
// import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mylogo from '../img/logo.png';

const Header = () => {
  return (
    <Navbar sticky="top" bg="warning" expand="lg">
      <Container fluid className="mx-auto">
        <Navbar.Brand href="#">
          <img src={mylogo} alt= "logo" className="mylogo"/>T-Shirt Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Button href="/" className="border = none">HOME</Button>
            <Button href="categories" className="border = none">CATEGORIES</Button>
            <Button href="shop" className="border = none">FEATURED BRANDS</Button>
            <Button href="products" className="border = none" >ALL PRODUCTS</Button>
            <Button href="about" className="border = none">ABOUT</Button>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="border = none">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;