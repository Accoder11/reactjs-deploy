import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Count from "./Count";
import BasicExample from './Card';
import UncontrolledExample from './Carousel'

const Main = () => {
    return(
        <div>
        <Container>
      <Row className="my-5">
      <Col xs={12} md={8}><UncontrolledExample></UncontrolledExample></Col>
      <Col>
      <Row></Row>
      <Row></Row>
      </Col>
        <Col><BasicExample></BasicExample></Col>
        <Col><AlertDismissible></AlertDismissible></Col>
      </Row>
      </Container>
      <Container>
      <Row>
        <Col xs={12} md={8}><UncontrolledExample></UncontrolledExample></Col>
        <Col xs={6} md={4}><Count></Count></Col>
      </Row>
      </Container>
        </div>
    )
}

export default Main;