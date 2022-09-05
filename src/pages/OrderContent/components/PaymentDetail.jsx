import InfoMenu from './InfoMenu';
import Account from './Account';
import CreditCard from './CreditCard';
import addComma from '../../../utils/addComma';

const PaymentDetail = ({ payment, due }) => {
  const payMethod = payment.method;
  const account = payment.account;
  const totalPrice = payment.total;

  return (
    <>
      {payMethod ? <CreditCard payment={payment} /> : <Account account={account} due={due} />}
      <InfoMenu title="결제금액" text={addComma(totalPrice) + '원'} />
    </>
  );
};

export default PaymentDetail;
