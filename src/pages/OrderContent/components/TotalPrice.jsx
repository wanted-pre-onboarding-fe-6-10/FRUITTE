import styled from 'styled-components';
import addComma from '../../../utils/addComma';

const TotalPrice = ({ orderInfo }) => {
  const productInfo = orderInfo.product;
  const isDiscount = productInfo.isDiscount;
  const discount = isDiscount ? productInfo.discount : productInfo.price;
  const deliveryFee = productInfo.delivery_fee;
  const totalPrice = discount + productInfo.delivery_fee;

  return (
    <Box>
      <PriceWrapper>
        <SubTitle>배송비</SubTitle>
        <PriceDetail>{addComma(deliveryFee) + '원'}</PriceDetail>
      </PriceWrapper>
      <PriceWrapper>
        <Title>총 결제금액</Title>
        <PriceInfo>{addComma(totalPrice) + '원'}</PriceInfo>
      </PriceWrapper>
    </Box>
  );
};

const Box = styled.div`
  width: 40%;
  padding: 0 2em;
  margin: -1px;
  background-color: ${props => props.theme.bgColor};
  border: ${props => `1px solid ${props.theme.borderColor}`};
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

const PriceWrapper = styled.div`
  width: 100%;
  padding: 0.5em 2em 0.5em 2em;
  display: flex;
`;

const Title = styled.h1`
  width: 50%;
  color: ${props => props.theme.ownColor};
  font-size: 1em;
  text-align: right;
  font-weight: bold;
  padding: 0 1em;
`;

const SubTitle = styled.h1`
  width: 50%;
  color: ${props => props.theme.subTextColor};
  font-size: 0.9em;
  text-align: right;
  padding: 0 1em;
`;

const PriceInfo = styled.h1`
  width: 50%;
  color: ${props => props.theme.ownColor};
  align-items: baseline;
  font-size: 1em;
  font-weight: bold;
  text-align: left;
  padding: 0 1em;
`;

const PriceDetail = styled.h1`
  width: 50%;
  color: ${props => props.theme.subTextColor};
  white-space: pre-wrap;
  font-size: 0.9em;
  text-align: left;
  padding: 0 1em;
`;

export default TotalPrice;
