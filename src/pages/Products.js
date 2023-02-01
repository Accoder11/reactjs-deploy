import React from 'react';
import Container from 'react-bootstrap/Container';
import Kids from '../Component/KidsSection'
import Mens from '../Component/MenSection';
import Womens from '../Component/WomenSection'


const Products = () => {
    return (
        <Container>
            <Mens></Mens>
            <Womens></Womens>
            <Kids></Kids>
      </Container>
    );
  }

  export default Products;