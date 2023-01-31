import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
    return (
      <Container fluid className='text-center text-lg-start bg-warning text-muted'>
        <div>
          © 2023 Copyright: 
          <a className='text-reset fw-bold' href='#'> kodegoPh.com
          </a>
        </div>
      </Container>
    );
  }

export default Footer;