import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const Feedback = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
      <Card>
      <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/730/180/people" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card>
      <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/730/180/people" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card>
      <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/730/180/people" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card>
      <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/730/180/animals" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card>
      <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/730/180/tech" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card>
      <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/730/180/nature" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </Carousel.Item>
    </Carousel>
  );
}

export default Feedback;