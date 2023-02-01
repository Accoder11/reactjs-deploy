import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

const Womens1 = () => {
    return (
    <CardGroup >
    <Card className="all-products">
    <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://placeimg.com/640/480/people" />
      <Card.Body className='mb-0 pb-0'>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          $50
        </Card.Text>
      </Card.Body>
    </Card >
    <Card className="all-products">
      <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://placeimg.com/640/480/people" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        $40
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="all-products">
      <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://placeimg.com/640/480/people" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        $60
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="all-products">
    <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://placeimg.com/640/480/people" />
      <Card.Body className='mb-0 pb-0'>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            $55
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="all-products">
      <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://placeimg.com/640/480/people" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        $50
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="all-products">
      <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://placeimg.com/640/480/people" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        $59
        </Card.Text>
      </Card.Body>
    </Card>
  </CardGroup>  
    );
  }

const Womens = () => {
    return (
        <Container className="bg-danger p-2 my-5">
            <h2>Women's Section</h2>
            <Womens1></Womens1>
            <Womens1></Womens1>
            <Womens1></Womens1>
            <Womens1></Womens1>
      </Container>
    );
  }

  export default Womens;