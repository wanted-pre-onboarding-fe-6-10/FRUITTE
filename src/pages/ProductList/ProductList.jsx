import React from 'react';
import styled from 'styled-components';
import products from '../../api/data.json';
import { lightTheme } from '../../styles/theme';
import Pagination from './components/Pagination';
import ProductItem from './components/ProductItem';

const ProductList = () => {
  return (
    <Container>
      <HeaderTextBox>
        FRUITTE STORE <span>{products.products_list.length}</span>
      </HeaderTextBox>
      <ContainerGridBox>
        {products.products_list.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ContainerGridBox>
      <Pagination />
    </Container>
  );
};

export default ProductList;

const Container = styled.div`
  width: 100%;
  padding: 0 10rem;
  margin: 0 auto;
`;

const HeaderTextBox = styled.p`
  margin: 1rem 0;
  font-size: 16px;
  font-weight: 500;

  span {
    color: ${lightTheme.ownColor};
  }
`;

const ContainerGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, auto));
  gap: 100px 10px;
`;
