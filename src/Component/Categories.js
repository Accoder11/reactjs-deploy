import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Categories = () => {
  return (
    <CardGroup>
      <Card>
      <Card.Img variant="top" className="col-md-5 mx-2 d-block w-100 fluid" src="https://placeimg.com/640/480/tech" />
        <Card.Body className='mb-0 pb-0'>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" className="col-md-5 mx-2 d-block w-100 fluid" src="https://placeimg.com/640/480/tech" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" className="col-md-5 mx-2 d-block w-100 fluid" src="https://placeimg.com/640/480/tech" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Categories;