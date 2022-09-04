import styled from 'styled-components';

const OrderTitle = ({ orderInfo }) => {
  const payMethod = orderInfo.payment_info.method;
  const payStatus = payMethod
    ? { title: '결제완료', description: '결제가 완료되었습니다.' }
    : { title: '주문완료', description: '아래 계좌 정보로 입금해 주시면 결제가 완료됩니다.' };

  return (
    <Box>
      <MainText>{payStatus.title}</MainText>
      <SubText>{payStatus.description}</SubText>
    </Box>
  );
};
const Box = styled.div`
  width: 40%;
  padding: 2em;
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

const MainText = styled.h1`
  color: ${props => props.theme.ownColor};
  font-size: 2em;
  text-align: center;
`;

const SubText = styled.h1`
  color: ${props => props.theme.subTextColor};
  margin-top: 1.5em;
  font-size: 1.2em;
  text-align: center;
`;

export default OrderTitle;
