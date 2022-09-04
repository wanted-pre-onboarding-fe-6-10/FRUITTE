import styled from 'styled-components';

const OrderTitle = ({ orderInfo }) => {
  const payMethod = orderInfo.payment_info.method;
  const payStatus = payMethod
    ? { title: '결제완료', description: '결제가 완료되었습니다.' }
    : { title: '주문완료', description: '계좌 입금 후 결제가 완료됩니다.' };

  return (
    <Box>
      <MainText>{payStatus.title}</MainText>
      <SubText>{payStatus.description}</SubText>
    </Box>
  );
};
const Box = styled.div`
  width: 40%;
`;

const MainText = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: 2em;
  text-align: center;
`;

const SubText = styled.h1`
  color: ${props => props.theme.subTextColor};
  font-size: 1.5em;
  text-align: center;
`;

export default OrderTitle;
