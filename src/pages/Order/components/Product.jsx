import styled from 'styled-components';
import OrderOption from './OrderOption';
const Product = ({ product }) => {
  return (
    <ProductBox>
      <ProductImage src={product.img[0]} />
      <InfoWrapper>
        <Text>{product.title}</Text>
        <OrderOption optionList={product.options} option={product.option} />
        <Text>{product.price}원</Text>
      </InfoWrapper>
    </ProductBox>
  );
};

// styled-components 위치
const ProductImage = styled.img`
  width: 100px;
  height: 100px;
`;
const InfoWrapper = styled.div``;
const ProductBox = styled.div`
  padding: 2px;
  margin: 1px;
  border: 1px solid;
  color: ${props => props.theme.ownColor};
  display: flex;
  flex-direction: row;
`;
const Text = styled.div`
  padding: 2px;
  margin: 1px;
  color: ${props => props.theme.textColor};
`;

export default Product;
