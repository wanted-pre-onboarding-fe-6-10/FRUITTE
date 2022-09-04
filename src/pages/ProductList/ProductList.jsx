import React, { useState } from 'react';
import styled from 'styled-components';
import products from '../../api/data.json';
import { lightTheme } from '../../styles/theme';
import Pagination from './components/Pagination';
import ProductItem from './components/ProductItem';
import { chunk } from '../../utils/sliceArr';

const pageSliceArr = chunk(products.products_list, 10);
const ProductList = () => {
  const [pageNum, setPageNum] = useState(0);

  const onIncreasePage = () => {
    if (pageNum === pageSliceArr.length - 1) {
      alert('마지막 페이지 입니다');
    } else {
      setPageNum(pageNum + 1);
    }
  };

  const onDecreasePage = () => {
    if (pageNum === 0) {
      alert('마지막 페이지 입니다.');
    } else {
      setPageNum(pageNum - 1);
    }
  };

  return (
    <Container>
      <HeaderBox>
        <HeaderTextBox>
          FRUITTE STORE <span>{products.products_list.length}</span>
        </HeaderTextBox>
        <Pagination
          pageSliceLength={pageSliceArr.length}
          pageNum={pageNum}
          onIncreasePage={onIncreasePage}
          onDecreasePage={onDecreasePage}
        />
      </HeaderBox>
      <ContainerGridBox>
        {pageSliceArr[pageNum].map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ContainerGridBox>
    </Container>
  );
};

export default ProductList;

const Container = styled.div`
  width: 100%;
  padding: 0 10rem;
  margin: 0 auto;

  @media (max-width: 650px) {
    padding: 0 5rem;
  }

  @media (max-width: 490px) {
    padding: 0 1rem;
  }
`;

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 1rem;
`;

const HeaderTextBox = styled.p`
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
