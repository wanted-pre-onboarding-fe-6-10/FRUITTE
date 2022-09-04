import styled from 'styled-components';
import Info from './Info';

const ProductInfo = ({ productInfo, priceInfo }) => {
  const withComma = price => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const itemPrice = productInfo.isDiscount ? priceInfo.discount_price : priceInfo.order_price;
  const deliveryFee = priceInfo.delivery_fee;
  const itemPriceWithComma = withComma(itemPrice);
  const deliveryFeeWithComma = withComma(deliveryFee);
  const totalPrice = withComma(itemPrice + deliveryFee);

  return (
    <ProductBox>
      <ProductImage src={productInfo.product_img} />
      <Wrapper>
        <Info title="주문번호" />
        <Text>{productInfo.product_name}</Text>
        <SubText>{productInfo.order_option}</SubText>
        <Text bold="bold">
          {itemPriceWithComma} + {deliveryFeeWithComma} = {totalPrice}
        </Text>
      </Wrapper>
    </ProductBox>
  );
};

const ProductBox = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
  border: ${props => `1px solid ${props.theme.borderColor}`};
`;

const Wrapper = styled.div`
  width: 75%;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.h1`
  color: ${props => props.theme.textColor};
  font-weight: ${props => props.bold};
  padding: 15px;
`;

const SubText = styled.h1`
  color: ${props => props.theme.subTextColor};
  padding: 15px;
`;

const ProductImage = styled.img.attrs(props => ({
  src: props.src,
}))`
  width: 25%;
`;

export default ProductInfo;
