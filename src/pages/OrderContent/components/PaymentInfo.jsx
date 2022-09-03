import Info from './Info';
import styled from 'styled-components';

const PaymentInfo = () => {
  return (
    <PaymentBox>
      <Info title="결제방식" />
      <Info title="카드정보" />
      <Info title="입금계좌" />
      <Info title="결제금액" />
    </PaymentBox>
  );
};

const PaymentBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default PaymentInfo;
