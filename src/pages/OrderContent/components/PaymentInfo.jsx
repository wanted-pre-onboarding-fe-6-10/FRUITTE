import Info from './Info';
import styled from 'styled-components';
import BoxTitle from './BoxTitle';

const PaymentInfo = ({ paymentInfo }) => {
  const payMethod = paymentInfo.payment_method;
  const payAccount = paymentInfo.account_info;
  const accountInfos = [payAccount.bank_name, payAccount.account_number, payAccount.account_name];

  return (
    <PaymentBox>
      <BoxTitle title="결제정보" />
      <Info title="결제방식" text={payMethod ? '카드결제' : '무통장입금'} />
      {payMethod && <Info title="카드정보" text={paymentInfo.card_number} />}
      {!payMethod && (
        <Info
          title="입금계좌"
          text={accountInfos.map(item => (
            <>
              {item} <br />
            </>
          ))}
        />
      )}
      <Info title="결제금액" text={paymentInfo.total_price} />
    </PaymentBox>
  );
};

const PaymentBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  margin-top: 20px;
  padding: 10px 30px;
  flex-direction: column;
  border: ${props => `1px solid ${props.theme.borderColor}`};
`;

export default PaymentInfo;
