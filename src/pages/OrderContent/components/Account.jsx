import InfoMenu from './InfoMenu';

const Account = ({ account, due }) => {
  const accountInfo = account.bank + '\n' + account.number + '\n' + account.name;

  return (
    <>
      <InfoMenu title="결제방식" text="무통장입금" />
      <InfoMenu title="입금계좌" text={accountInfo} />
      <InfoMenu title="입금기한" text={due} />
    </>
  );
};

export default Account;
