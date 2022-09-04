import InfoMenu from './InfoMenu';
import Account from './Account';
import CreditCard from './CreditCard';

const PaymentDetail = ({ payment, due }) => {
  const payMethod = payment.method;
  const account = payment.account;
  const totalPrice = payment.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';

  return (
    <>
      {payMethod ? <CreditCard payment={payment} /> : <Account account={account} due={due} />}
      <InfoMenu title="결제금액" text={totalPrice} />
    </>
  );
};

export default PaymentDetail;
