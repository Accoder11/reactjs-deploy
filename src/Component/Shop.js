import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Shop = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <CardGroup>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/300/250/people" />
        <Card.Body>
          <Card.Title>1</Card.Title>
        </Card.Body>
      </Card>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/300/250/people" />
        <Card.Body>
          <Card.Title>2</Card.Title>
        </Card.Body>
      </Card>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/300/250/people" />
        <Card.Body>
          <Card.Title>3</Card.Title>
        </Card.Body>
      </Card>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/300/250/people" />
        <Card.Body>
          <Card.Title>4</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
      </Carousel.Item>
      <Carousel.Item>
      <CardGroup>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/300/250/nature" />
        <Card.Body>
          <Card.Title>5</Card.Title>
        </Card.Body>
      </Card>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/300/250/nature" />
        <Card.Body>
          <Card.Title>6</Card.Title>
        </Card.Body>
      </Card>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/300/250/nature" />
        <Card.Body>
          <Card.Title>7</Card.Title>
        </Card.Body>
      </Card>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/300/250/people" />
        <Card.Body>
          <Card.Title>8</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
      </Carousel.Item>
      <Carousel.Item>
      <CardGroup>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/300/250/animals" />
        <Card.Body>
          <Card.Title>9</Card.Title>
        </Card.Body>
      </Card>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 thumbnail fluid" src="https://placeimg.com/300/250/animals" />
        <Card.Body>
          <Card.Title>10</Card.Title>
        </Card.Body>
      </Card>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 thumbnail fluid" src="https://placeimg.com/300/250/animals" />
        <Card.Body>
          <Card.Title>11</Card.Title>
        </Card.Body>
      </Card>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/300/250/animals" />
        <Card.Body>
          <Card.Title>12</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
      </Carousel.Item>
      <Carousel.Item>
      <CardGroup>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/300/250/animals" />
        <Card.Body>
          <Card.Title>13</Card.Title>
        </Card.Body>
      </Card>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 thumbnail fluid" src="https://placeimg.com/300/250/nature" />
        <Card.Body>
          <Card.Title>14</Card.Title>
        </Card.Body>
      </Card>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 thumbnail fluid" src="https://placeimg.com/300/250/nature" />
        <Card.Body>
          <Card.Title>15</Card.Title>
        </Card.Body>
      </Card>
      <Card className='h-50'>
        <Card.Img variant="top" className="d-block w-100 h-50 fluid" src="https://placeimg.com/300/250/nature" />
        <Card.Body>
          <Card.Title>16</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
      </Carousel.Item>
    </Carousel>
  );
}

export default Shop;