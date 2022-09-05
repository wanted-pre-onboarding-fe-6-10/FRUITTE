import InfoMenu from './InfoMenu';
import styled from 'styled-components';
import PaymentDetail from './PaymentDetail';
import BoxTitle from './BoxTitle';

const Payment = ({ orderInfo }) => {
  const isRegistered = orderInfo.orderer.isRegistered;
  const nonMemberMessage = '* 비회원 주문의 경우 주문번호와 연락처번호로 주문조회가 가능합니다.';
  const date = new Date();
  const getYear = date.getFullYear();
  const getMonth = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  const getDate = date.getDate() + 3 < 10 ? '0' + (date.getDate() + 3) : date.getDate() + 3;
  const randomNumber = Math.floor(Math.random() * 1000000).toString();
  const orderNumber = getYear + getMonth + getDate - 3 + randomNumber;
  const due = `${getYear}-${getMonth}-${getDate} 까지`;

  return (
    <PaymentBox>
      <BoxTitle title="결제정보" />
      <InfoMenu title="주문번호" text={orderNumber} />
      {!isRegistered && <Text>{nonMemberMessage}</Text>}
      <PaymentDetail payment={orderInfo.payment_info} due={due} />
    </PaymentBox>
  );
};

const PaymentBox = styled.div`
  width: 40%;
  height: 100%;
  margin: 0.5em 0;
  display: flex;
  flex-direction: column;
  border: ${props => `1px solid ${props.theme.borderColor}`};
  background-color: ${props => props.theme.bgColor};
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

const Text = styled.h2`
  color: ${props => props.theme.highlightColor};
  font-size: 0.8em;
  margin-top: -1em;
  padding: 0 2em 0.5em 4em;
`;

export default Payment;
