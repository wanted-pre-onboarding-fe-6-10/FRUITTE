import InfoMenu from './InfoMenu';

const CreditCard = ({ payment }) => {
  return (
    <>
      <InfoMenu title="결제방식" text="신용카드" />
      <InfoMenu title="카드정보" text={payment.card} />
    </>
  );
};

export default CreditCard;
