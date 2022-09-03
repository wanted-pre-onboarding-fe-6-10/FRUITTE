import styled from 'styled-components';

const Product = props => {
  return (
    <ProductBox>
      <Text>{props.product.title}</Text>
      <Text>{props.product.price}</Text>
    </ProductBox>
  );
};

// styled-components 위치
const ProductBox = styled.div`
  padding: 2px;
  margin: 1px;
  border: 1px solid;
  color: ${props => props.theme.ownColor};
`;
const Text = styled.div`
  padding: 2px;
  margin: 1px;
  color: ${props => props.theme.ownColor};
`;

export default Product;
