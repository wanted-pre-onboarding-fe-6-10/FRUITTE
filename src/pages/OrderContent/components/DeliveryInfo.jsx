import OrderInfo from './OrderInfo';
import styled from 'styled-components';

const DeliveryInfo = () => {
  return (
    <DeliveryBox>
      <OrderInfo title="수령인" />
      <OrderInfo title="배송지" />
      <OrderInfo title="배송방법" />
      <OrderInfo title="배송메모" />
      <RedirectButton>홈으로</RedirectButton>
    </DeliveryBox>
  );
};

const RedirectButton = styled.button`
  background-color: ${props => props.theme.ownColor};
  color: ${props => props.theme.boxColor};
`;

const DeliveryBox = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
`;

export default DeliveryInfo;
