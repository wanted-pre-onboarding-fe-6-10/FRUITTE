import styled from 'styled-components';
import addComma from '../../../utils/addComma';

const ProductInfo = ({ orderInfo }) => {
  const productInfo = orderInfo.product;
  const productImg = productInfo.img;
  const productName = productInfo.name;
  const isDiscount = productInfo.isDiscount;
  const discount = isDiscount ? productInfo.discount : productInfo.price;
  const deliveryFee = productInfo.delivery_fee;
  const totalPrice = discount + productInfo.delivery_fee;

  return (
    <ProductBox>
      <ProductImage src={productImg} />
      <Wrapper>
        <Text>{productName}</Text>
        <SubText>{productInfo.option}</SubText>
        <SubText>상품금액: {addComma(discount) + '원'}</SubText>
        <SubText>배송비: {addComma(deliveryFee) + '원'}</SubText>
      </Wrapper>
    </ProductBox>
  );
};

const ProductBox = styled.div`
  width: 40%;
  padding: 1em;
  display: flex;
  justify-content: center;
  border: ${props => `1px solid ${props.theme.borderColor}`};
  background-color: ${props => props.theme.bgColor};
  @media (max-width: 650px) {
    width: 100%;
  }
  @media (min-width: 650px) and (max-width: 800px) {
    width: 80%;
  }
  @media (min-width: 800px) and (max-width: 1180px) {
    width: 60%;
  }
`;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

const Text = styled.h1`
  color: ${props => props.theme.textColor};
  font-weight: ${props => props.bold};
  font-size: 0.9em;
`;

const SubText = styled.h1`
  color: ${props => props.theme.subTextColor};
  font-size: 0.8em;
`;

const ProductImage = styled.img.attrs(props => ({
  src: props.src,
}))`
  width: 25%;
  padding: 10px;
`;

export default ProductInfo;
