import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Status from '../../../components/Status';
import { lightTheme } from '../../../styles/theme';
import addComma from '../../../utils/addComma';

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const toDetailProduct = idx => {
    navigate(`/fruitstore/${idx}`);
  };
  return (
    product.isShow && (
      <ProductItemBlock onClick={() => toDetailProduct(product.id)}>
        <Image src={product.img[0]} alt="productImg" />
        <Title>{product.title}</Title>
        <Price>
          {addComma(product.discount)}원 <span>{addComma(product.price)}원</span>
        </Price>
        <StatusBlock>
          {product.status.isDiscount === true && <Status discount>SALE</Status>}
          {product.status.isBest && <Status best>BEST</Status>}
          {product.status.isRecommend && <Status commonStatus>MD</Status>}
          {product.status.isPending && <Status commonStatus>판매대기</Status>}
          {product.status.isSoldout && <Status sold>SOLDOUT</Status>}
        </StatusBlock>
      </ProductItemBlock>
    )
  );
};

export default ProductItem;

const ProductItemBlock = styled.div`
  cursor: pointer;
`;

const Title = styled.p`
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  margin-bottom: 0.5rem;
  span {
    text-decoration: line-through;
    color: ${lightTheme.subTextColor};
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

const StatusBlock = styled.div`
  display: flex;
`;
