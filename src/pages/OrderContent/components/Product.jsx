import styled from 'styled-components';

const ProductInfo = ({ orderInfo }) => {
  const productInfo = orderInfo.product;
  const productImg = productInfo.img;
  const productName = productInfo.name;
  const isDiscount = productInfo.isDiscount;
  const discount = isDiscount ? productInfo.discount : productInfo.price;
  const commaReg = /\B(?=(\d{3})+(?!\d))/g;
  const productPrice = discount.toString().replace(commaReg, ',') + '원';
  const deliveryFee = productInfo.delivery_fee.toString().replace(commaReg, ',') + '원';
  const totalPrice = (discount + productInfo.delivery_fee).toString().replace(commaReg, ',') + '원';

  return (
    <ProductBox>
      <ProductImage src={productImg} />
      <Wrapper>
        <Text>{productName}</Text>
        <SubText>옵션: {productInfo.option}</SubText>
        <Text bold="bold">총 주문금액 : {totalPrice}</Text>
        <SubText>
          상품금액: {productPrice} + 배송비: {deliveryFee}
        </SubText>
      </Wrapper>
    </ProductBox>
  );
};

const ProductBox = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  border: ${props => `1px solid ${props.theme.borderColor}`};
`;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.h1`
  color: ${props => props.theme.textColor};
  font-weight: ${props => props.bold};
`;

const SubText = styled.h1`
  color: ${props => props.theme.subTextColor};
  font-size: 0.8em;
`;

const ProductImage = styled.img.attrs(props => ({
  src: props.src,
}))`
  width: 25%;
  margin: 10px;
`;

export default ProductInfo;
