import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


const Carousels = () => {
  return (
    <Container>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 fluid"
          src="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png"
          alt=""
        />
        <Carousel.Caption>
        <Button className="shop-now">SHOP NOW!</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fluid"
          src="http://cdn.shopify.com/s/files/1/1859/8979/articles/best-product-photography-ecommerce-banner-image1.png?v=1519906851"
          alt=""
        />

        <Carousel.Caption>
        <Button className="shop-now">SHOP NOW!</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fluid"
          src="https://d31u1j2vbx6ya5.cloudfront.net/gei-assets/uploads/2015/06/editing-services.jpg"
          alt=""
        />

        <Carousel.Caption>
        <Button className="shop-now">SHOP NOW!</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 fluid"
          src="https://media.gq.com/photos/61ef317bea362c0f8b862d81/master/pass/012422-shirts-for-men-lead.jpg" alt=""
        />

        <Carousel.Caption>
        <Button className="shop-now">SHOP NOW!</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 fluid"
          src="https://cms-wp.bigcommerce.com/wp-content/uploads/2020/02/Blog-Feb_Coupons_CD668_SJ.jpg"
          alt=""
        />

        <Carousel.Caption>
        <Button className="shop-now">SHOP NOW!</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Container>
  );
}

export default Carousels;