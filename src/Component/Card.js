import React from 'react'

import Card from 'react-bootstrap/Card';

const ImageAndCard = () => {
  return (
    <>
      <Card>
      <Card.Link href="#"><Card.Img variant="top" src="https://www.coredna.com/files/images/blogs/71/961/ecommerce-promotion-strategy-pottery-barn-tiering-discount.png?w=831&h=444" /></Card.Link>
      </Card>
      <br />
      <Card>
      <Card.Link href="#"><Card.Img variant="bottom" src="https://retailminded.com/wp-content/uploads/2019/07/promotions-min-copy.jpg" /></Card.Link>
      </Card>
    </>
  );
}

export default ImageAndCard;