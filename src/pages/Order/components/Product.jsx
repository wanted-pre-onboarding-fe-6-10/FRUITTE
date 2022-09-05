import styled from 'styled-components';
import OrderOption from './OrderOption';
import addComma from '../../../utils/addComma';
const Product = ({ product }) => {
  return (
    <ProductBox href={'/fruitstore/' + product.id}>
      <ProductImage src={product.img[0]} />
      <InfoWrapper>
        <Text>{product.title}</Text>
        <OrderOption optionList={product.options} option={product.option} />
        <Text>{addComma(product.price)}원</Text>
      </InfoWrapper>
    </ProductBox>
  );
};

// styled-components 위치
const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 30px;
`;
const InfoWrapper = styled.div``;
const ProductBox = styled.a`
  margin: 15px;
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
