import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
    return (
      <Container fluid className='text-center text-lg-start bg-warning text-muted'>
        <div>
          © 2023 Copyright: 
          <a className='footer-link fw-bold' href='https://accoder11.github.io/react-playground' target="_blank" rel="noopener noreferrer"> kodegoPh.com
          </a>
        </div>
      </Container>
    );
  }

export default Footer;