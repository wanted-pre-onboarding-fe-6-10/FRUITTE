import styled from 'styled-components';

const OrderStatus = ({ payMethod }) => {
  const paymentStatus = payMethod
    ? { title: '결제완료', description: '결제가 완료되었습니다.' }
    : { title: '주문완료', description: '아래 계좌로 입금해 주시면 결제가 완료됩니다.' };

  return (
    <Box>
      <MainText>{paymentStatus.title}</MainText>
      <SubText>{paymentStatus.description}</SubText>
    </Box>
  );
};
const Box = styled.div`
  margin: 20px;
  width: 50%;
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
