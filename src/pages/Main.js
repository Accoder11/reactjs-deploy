import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Count from "../Component/Count";
import ImageAndCard from '../Component/Card';
import Carousels from '../Component/Carousel'
import Categories from './Categories'
import Shop from "./Shop";
import AboutUs from "./AboutUs";
import Feedback from "../Component/Feedback";


const Main = () => {
    return(
        <div>
        <Container fluid className="my-5">
      <Row className="my-5">
      <Col xs={12} md={8}><Carousels></Carousels></Col>
      <Col>
      <Row><Col><ImageAndCard></ImageAndCard></Col></Row>
      </Col>
      </Row>
      </Container>
      <Container fluid className="my-5 mx-auto bg-warning">
      <h1 className="my-3">Categories</h1>
      <Categories></Categories>
      </Container>
      
      <Container fluid className="mb-5 mx-auto bg-warning">
        <div>
        <h1 className="my-5">Featured Products</h1>
        <Shop></Shop>
        </div>
      </Container >
      <Container fluid className="mb-5">
      <Row className="justify-content text-center py-5" gap={5}>
        <Col>
        <AboutUs></AboutUs>
        </Col>
        <Col sm={7} className="mx-4 px-3">
        <h2>Customer Feedback</h2>
        <Feedback></Feedback>
        </Col>
      </Row>
      </Container>
        </div>
    )
}

export default Main;