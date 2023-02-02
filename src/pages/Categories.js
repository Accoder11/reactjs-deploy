import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Categories = () => {
  return (
    <div>
      <h1>Categories</h1>
    <CardGroup>
      <Card className="p-4">
      <a href="/mens-section">
      <Card.Img variant="top" className="col-md-5 mx-2 d-block w-100 fluid" src="https://cdn.shopify.com/s/files/1/0093/2542/products/1071white_1.jpg?v=1665556013" width={50} />
      </a>
        <Card.Body className='mb-0 pb-0'>
          <Card.Title><a href="/mens-section"> Men's Section</a></Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-4">
      <a href="/womens-section">
        <Card.Img variant="top" className="col-md-5 mx-2 d-block w-100 fluid" src="https://lzd-img-global.slatic.net/g/p/a939f00dec4a732033201d9be932b08c.jpg_720x720q80.jpg_.webp" width={50}/>
        </a>
        <Card.Body>
        <Card.Title><a href="/womens-section"> Women's Section</a></Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-4">
      <a href="/kids-section"> 
      <Card.Img variant="top" className="col-md-5 mx-2 d-block w-100 fluid" src="https://contents.mediadecathlon.com/p2205608/8eb54a1b712794e2aaac9047d5ba96ad/p2205608.jpg?f=650x650&format=auto" width={50} />
      </a>
        <Card.Body>
        <Card.Title><a href="/kids-section"> Kids Section</a></Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  );
}

export default Categories;