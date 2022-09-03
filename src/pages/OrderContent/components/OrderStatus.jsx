import styled from 'styled-components';

const OrderStatus = () => {
  const payWithCard = false;
  const paymentTitle = payWithCard ? '결제완료' : '주문완료';
  const paymentDescription = payWithCard
    ? '결제가 완료되었습니다.'
    : '아래 계좌로 입금해 주시면 결제가 완료됩니다.';

  return (
    <Box>
      <MainText>{paymentTitle}</MainText>
      <SubText>{paymentDescription}</SubText>
    </Box>
  );
};
const Box = styled.div`
  margin: 20px;
`;

const MainText = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: 2em;
  text-align: center;
  padding: 15px;
`;

const SubText = styled.h1`
  color: ${props => props.theme.subTextColor};
  font-size: 1.5em;
  text-align: center;
  padding: 15px;
`;

export default OrderStatus;
