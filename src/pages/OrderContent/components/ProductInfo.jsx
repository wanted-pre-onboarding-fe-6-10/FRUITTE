import styled from 'styled-components';

const ProductInfo = ({ orderInfo }) => {
  return (
    <ProductBox>
      <ProductImage src={orderInfo.product_image} />
      <Wrapper>
        <Text>item-name{orderInfo.product_image}</Text>
        <SubText>item-option</SubText>
        <Text>price + delivery_fee = total price</Text>
      </Wrapper>
    </ProductBox>
  );
};

const ProductBox = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.h1`
  color: ${props => props.theme.ownColor};
`;

const SubText = styled.h1`
  color: ${props => props.theme.subTextColor};
`;

const ProductImage = styled.img.attrs(props => ({
  src: props.src,
  size: props.size || '1em',
}))``;

export default ProductInfo;
